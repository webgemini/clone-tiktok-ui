import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Language from './Language';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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

    return (
        <Tippy
            interactive
            offset={[12, 10]}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popper-menu')}>
                        {history.length > 1 && (
                            <Language
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
