import { HeaderLayout } from '~/layouts/';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import NotFound from '~/pages/404';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.upload, component: Upload, layout: HeaderLayout },
    { path: config.routes.error, component: NotFound, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
