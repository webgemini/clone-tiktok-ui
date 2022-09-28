import PropTypes from 'prop-types';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} end>
            {match ? activeIcon : icon}
            <h2 className={cx('title')}>{title}</h2>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
