import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faChartColumn,
    faCompactDisc,
    faEarthAmericas,
    faFileInvoice,
    faGuitar,
    faIcons,
    faPlus,
    faRadio,
    faTableCells,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import images from '../../../../assets/images';
import Button from '../../../Button';
import Image from '../../../Image';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

const dataTops = [
    {
        id: 0,
        title: 'Cá nhân',
        icon: <FontAwesomeIcon icon={faIcons} />,
        href: 'https://id.zalo.me/account?continue=https%3A%2F%2Fzingmp3.vn%2F%3FisZaloPopupLogin%3D1',
    },
    {
        id: 1,
        title: 'Khám phá',
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        to: '/discover',
    },
    {
        id: 2,
        title: '#Zingchart',
        icon: <FontAwesomeIcon icon={faChartColumn} />,
        to: '/zingchart',
    },
    {
        id: 3,
        title: 'Radio',
        icon: <FontAwesomeIcon icon={faRadio} />,
        to: '/radio',
    },
    {
        id: 4,
        title: 'Theo dõi',
        icon: <FontAwesomeIcon icon={faFileInvoice} />,
        to: '/follow',
    },
];

const dataBottoms = [
    {
        id: 5,
        title: 'Nhạc mới',
        icon: <FontAwesomeIcon icon={faGuitar} />,
        to: '/newmusic',
    },
    {
        id: 6,
        title: 'Thể loại',
        icon: <FontAwesomeIcon icon={faTableCells} />,
        to: '/category',
    },
    {
        id: 7,
        title: 'Top 100',
        icon: <FontAwesomeIcon icon={faStar} />,
        to: '/top100',
    },
    {
        id: 8,
        title: 'MV',
        icon: <FontAwesomeIcon icon={faCompactDisc} />,
        to: '/mv',
    },
];
function SideBar() {
    const [id, setId] = useState();
    return (
        <div className={cx('wrapper')}>
            <Button to="/" className={cx('wrapper-logo')}>
                <Image className={cx('logo')} src={images.logo} alt="logo" />
            </Button>
            <div className={cx('wrapper-btn')}>
                <div className={cx('wrapper-btn__top')}>
                    {dataTops.map((dataTop, index) => (
                        <Button
                            className={cx('custom-btn', {
                                active: id === dataTop.id && id != 0,
                            })}
                            key={index}
                            id={dataTop.id}
                            to={dataTop.to}
                            href={dataTop.href}
                            leftIcon={dataTop.icon}
                            onClick={() => setId(dataTop.id)}
                        >
                            {dataTop.title}
                        </Button>
                    ))}
                </div>
                <div className={cx('wrapper-btn__bottom')}>
                    {dataBottoms.map((dataBottom, index) => (
                        <Button
                            className={cx('custom-btn', {
                                active: id === dataBottom.id && id != 0,
                            })}
                            key={index}
                            to={dataBottom.to}
                            leftIcon={dataBottom.icon}
                            onClick={() => setId(dataBottom.id)}
                        >
                            {dataBottom.title}
                        </Button>
                    ))}
                    <div className={cx('container-login')}>
                        <h4 className={cx('text')}>Đăng nhập để khám phá playlist dành riêng cho bạn</h4>
                        <Button size="medium" outline>
                            Đăng nhập
                        </Button>
                    </div>
                    <div className={cx('container-updateVip')}>
                        <h4 className={cx('text')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</h4>
                        <Button
                            href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar"
                            size="large"
                        >
                            Nâng cấp VIP
                        </Button>
                    </div>
                </div>
                <div className={cx('more-playlist')}>
                    <Button
                        className={cx('custom-btn-playlist')}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        type="text"
                    >
                        Tạo playlist mới
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
