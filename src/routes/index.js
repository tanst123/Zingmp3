// page
import Discover from '../pages/Discover';
import Home from '../pages/Home';
import Radio from '../pages/Radio';
import Follow from '../pages/Follow';
import ZingChart from '../pages/ZingChart';
import Profile from '../pages/Profile';
import Category from '../pages/Category';
import Top100 from '../pages/Top100';
import NewMusic from '../pages/NewMusic';
import MV from '../pages/MV';

// Các trang không cần đăng nhập
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/discover',
        component: Discover,
    },
    {
        path: '/radio',
        component: Radio,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/zingchart',
        component: ZingChart,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/top100',
        component: Top100,
    },
    {
        path: '/mv',
        component: MV,
    },
    {
        path: '/newmusic',
        component: NewMusic,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
];

// Phải đăng nhập mới vào được => chuyển đến trang login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
