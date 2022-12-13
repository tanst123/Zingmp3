import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [showMenu, setShowMenu] = useState(false);

    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <div>
            <HeadLessTippy
                visible={showMenu}
                placement="bottom-end"
                interactive
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowMenu(false)}
            >
                <div onClick={() => setShowMenu(true)}>{children}</div>
            </HeadLessTippy>
        </div>
    );
}

export default Menu;
