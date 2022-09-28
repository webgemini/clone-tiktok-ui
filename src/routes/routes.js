import { HeaderLayout } from '~/layouts/';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import NotFound from '~/pages/404';

const publicRoutes = [
    { id: 1, path: config.routes.home, component: Home },
    { id: 2, path: config.routes.following, component: Following },
    { id: 3, path: config.routes.live, component: Live },
    { id: 4, path: config.routes.profile, component: Profile },
    { id: 5, path: config.routes.search, component: Search },
    { id: 6, path: config.routes.upload, component: Upload, layout: HeaderLayout },
    { id: 7, path: config.routes.error, component: NotFound, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
