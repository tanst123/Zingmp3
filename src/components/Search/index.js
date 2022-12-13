import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (debounce.trim() === '') {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHiden = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadLessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                            {searchResult.map((data) => (
                                <AccountItem key={data.id} data={data} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHiden}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm lời bài hát, nghệ sĩ...."
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    <button className={cx('clear-loading')}>
                        {!!searchValue && !loading && (
                            <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} onClick={handleClear} />
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </button>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;
