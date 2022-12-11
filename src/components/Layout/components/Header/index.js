import { useState } from 'react';
import classNames from 'classnames/bind';
//Tippy
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpFromBracket,
    faCircleXmark,
    faGear,
    faMagnifyingGlass,
    faShirt,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Image from '../../../Image';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([1, 2]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <HeadLessTippy
                        visible={searchResult.length > 0}
                        interactive
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Gợi ý kết quả</h4>
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Tìm kiếm lời bài hát, nghệ sĩ...." spellCheck={false} />

                            <button className={cx('clear-loading')}>
                                <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            </button>

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadLessTippy>
                </div>

                <div className={cx('action')}>
                    <Tippy content="Chủ đề">
                        <Button type="circle">
                            <FontAwesomeIcon icon={faShirt} />
                        </Button>
                    </Tippy>
                    <Tippy content="Nâng cấp VIP">
                        <Button type="circle">
                            <FontAwesomeIcon icon={faGem} />
                        </Button>
                    </Tippy>
                    <Tippy content="Tải lên">
                        <Button type="circle">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </Button>
                    </Tippy>
                    <Tippy content="Cài đặt">
                        <Button type="circle">
                            <FontAwesomeIcon icon={faGear} />
                        </Button>
                    </Tippy>

                    <Image
                        className={cx('user-avatar')}
                        src="1https://lh3.googleusercontent.com/ogw/AOh-ky0JF4vtPN0YKpaeBbk4h-fDUvO_nnO-fjp3_LFy=s32-c-mo"
                        alt="Nguyen Van Tan"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
