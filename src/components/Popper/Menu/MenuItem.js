import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';
import Button from '../../Button';
import styles from './Menu.module.scss';
import { SubMenu } from './SubMenu';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classnames = cx('menu-item', {
        seperate: data.seperate,
        opacity: data.opacity,
        marginLeft: data.marginLeft,
        rightIcon: data.rightIcon,
    });
    return data.children ? (
        <HeadLessTippy
            placement="right-start"
            interactive
            render={(attrs) => (
                <div className={cx('submenu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('submenu-popper')}>
                        {data.children.map((data, index) => (
                            <SubMenu key={index} data={data} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <Button
                className={classnames}
                className1={cx('right-icon')}
                leftIcon={data.leftIcon}
                rightIcon={data.rightIcon}
                to={data.to}
            >
                {data.title}
            </Button>
        </HeadLessTippy>
    ) : (
        <Button
            className={classnames}
            className1={cx('right-icon')}
            leftIcon={data.leftIcon}
            rightIcon={data.rightIcon}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
