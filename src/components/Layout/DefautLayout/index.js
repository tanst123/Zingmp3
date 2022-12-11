import classNames from 'classnames/bind';
import Footer from '../components/Footer';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <SideBar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
