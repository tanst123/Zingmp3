// Layout
import { HeaderOnly } from '../components/Layout';

// page
import Discover from '../pages/Discover';
import Home from '../pages/Home';
import Radio from '../pages/Radio';
import Follow from '../pages/Follow';
import ZingChat from '../pages/ZingChat';

// Các trang không cần đăng nhập
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/discover',
        component: Discover,
        layout: HeaderOnly,
    },
    {
        path: '/radio',
        component: Radio,
        layout: null,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/zingChat',
        component: ZingChat,
    },
];

// Phải đăng nhập mới vào được => chuyển đến trang login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
