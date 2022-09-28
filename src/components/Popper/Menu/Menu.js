import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';
import { TopArrowIcon } from '~/components/Icons';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Language from './Language';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];
    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.subMenu;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.subMenu]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
            <TopArrowIcon data-popper-arrow="" className={cx('top-arrow-icon')} />
            <PopperWrapper className={cx('popper-menu')}>
                {history.length > 1 && <Language title={currentMenu.title} onBack={handleBack} />}
                <div className={cx('language-content')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            offset={[12, 10]}
            delay={[0, 700]}
            placement="bottom-end"
            arrow
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
