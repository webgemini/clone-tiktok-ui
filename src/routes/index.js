import { HeaderLayout } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import NotFound from '~/pages/404';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:username', component: Profile },
    { path: '/search', component: Search },
    { path: '/upload', component: Upload, layout: HeaderLayout },
    { path: '/*', component: NotFound, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
