import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenu({ data }) {

    const [check, setCheck] = useState(data.check);
    
    return (
        <button className={cx('wrapper')} onClick={() => setCheck(!check)}>
            <h4 className={cx('title')}>
                {data.title1}
                <span className={cx('icon')}> {data.iconTitle}</span>
                {data.title2}
            </h4>
            <div className={cx('description')}>
                <p>{data.description}</p>
                {check && <span className={cx('icon-check')}>{data.icon}</span>}
            </div>
        </button>
    );
}

export default SubMenu;
