import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <a  className={cx('link')} href='a'>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1670860800&x-signature=9UAs33y5wRCrzjVCUoB2BuTMrzc%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Mỹ Tâm</h4>
                <p className={cx('note')}>Nghệ sĩ</p>
            </div>
            </a>
        </div>
    );
}
export default AccountItem;
