import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useCallback, useRef, useState, memo } from 'react';

import styles from './SharePopper.module.scss';
import { PopperWrapper } from '~/components/Popper';
import { shareLinks } from '~/components/Contains';
import { TopArrowIcon, ShareArrowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SharePopper({ children }) {
    const [linksShare, setLinksShare] = useState(() => {
        const newLinksShare = shareLinks.slice(0, 5);
        return newLinksShare;
    });
    const refArrowShare = useRef();

    const showMorePopperShare = useCallback(() => {
        let arrowShare = null;
        arrowShare = refArrowShare.current;
        setLinksShare(shareLinks);
        if (arrowShare) {
            arrowShare.style = 'display: none;';
        }
    }, []);

    const handleResetShare = () => {
        let arrowShare = null;
        arrowShare = refArrowShare.current;
        setLinksShare((prev) => prev.slice(0, 5));
        if (arrowShare) {
            arrowShare.style = 'display: flex;';
        }
    };

    return (
        <Tippy
            interactive
            placement="top-start"
            offset={[-30, 5]}
            delay={[0, 300]}
            arrow
            zIndex={2}
            onHide={handleResetShare}
            render={(attrs) => (
                <div className={cx('share-wrapper')} tabIndex="-1" {...attrs}>
                    <TopArrowIcon className={cx('bottom-arrow-icon')} data-popper-arrow="" />
                    <PopperWrapper>
                        <div className={cx('share-container')}>
                            {linksShare.map((item) => {
                                return (
                                    <Link key={item.id} to={item.to} className={cx('share-link')}>
                                        {item.icon}
                                        <span className={cx('share-text')}>{item.title}</span>
                                    </Link>
                                );
                            })}
                            <Link
                                ref={refArrowShare}
                                to="/"
                                className={cx('share-link-arrow')}
                                onClick={showMorePopperShare}
                            >
                                <ShareArrowIcon />
                            </Link>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

SharePopper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default memo(SharePopper);
