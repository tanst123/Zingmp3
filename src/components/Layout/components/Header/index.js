import classNames from 'classnames/bind';
//Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpFromBracket,
    faBan,
    faCheck,
    faChevronRight,
    faCirclePlay,
    faGear,
    faIgloo,
    faPhone,
    faShieldHalved,
    faShirt,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import { faChessQueen, faFileLines, faGem } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';

import Button from '../../../Button';
import Image from '../../../Image';
import Search from '../../../Search';
import Menu from '../../../Popper/Menu';
import { faViadeo } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        leftIcon: <FontAwesomeIcon icon={faBan} />,
        title: 'Danh sách chặn',
        to: '/listBlock',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faChessQueen} />,
        title: 'Chất lượng nhạc',
        rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
        children: [
            {
                title1: 'SQ',
                title2: '128',
                iconTitle: <FontAwesomeIcon icon={faSun} />,
                icon: <FontAwesomeIcon icon={faCheck} />,
                description: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn',
                check: true,
            },
            {
                title1: 'HQ',
                title2: '320',
                iconTitle: <FontAwesomeIcon icon={faSun} />,
                icon: <FontAwesomeIcon icon={faCheck} />,
                description: 'Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh',
                check: false
            },
        ],
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCirclePlay} />,
        title: 'Giao diện',
    },
    {
        seperate: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faIgloo} />,
        title: 'Giới thiệu',
        opacity: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Liên hệ',
        to: '/contact',
        opacity: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faViadeo} />,
        title: 'Quảng cáo',
        to: '/pr',
        opacity: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFileLines} />,
        title: 'Thỏa thuận sử dụng',
        to: '/agreement',
        opacity: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faShieldHalved} />,
        title: 'Chính sách bảo mật',
        to: '/security',
        opacity: true,
    },
];
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

                    <Menu items={MENU_ITEMS}>
                        <Button type="circle">
                            <FontAwesomeIcon icon={faGear} />
                        </Button>
                    </Menu>
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
