import classNames from 'classnames/bind';
//Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faGear, faShirt } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';

import Button from '../../../Button';
import Image from '../../../Image';
import Search from '../../../Search';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Search />
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
