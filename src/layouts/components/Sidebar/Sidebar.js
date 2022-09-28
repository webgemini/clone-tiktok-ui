import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, UserIcon, LiveIcon, HomeActiveIcon, UserActiveIcon, LiveActiveIcon } from '~/components/Icons';
import Frame from './Frame';
import Accounts from '~/components/Accounts';
import Discover from './Discover';
import Footer from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('nav-container')}>
            <div className={cx('scroll-container')}>
                <aside className={cx('wrapper')}>
                    <Menu>
                        <MenuItem
                            title="For You"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserIcon />}
                            activeIcon={<UserActiveIcon />}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    <Frame />
                    <Accounts label="Suggested accounts" />
                    <Discover />
                    <Footer />
                </aside>
            </div>
        </div>
    );
}

export default Sidebar;
