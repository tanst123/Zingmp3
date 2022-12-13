import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.full_name}</h4>
                <div className={cx('note')}>
                    <span>{data.nickname}</span>
                    
                    <p>
                        <span className={cx('followers_count')}>{data.followers_count}</span>
                        quan tâm
                    </p>
                </div>
            </div>
        </Link>
    );
}
export default AccountItem;
