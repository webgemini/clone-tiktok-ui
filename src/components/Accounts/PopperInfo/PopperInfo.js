import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from '../AccountItem/AccountItem.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function PopperInfo({ children, data, setOffset }) {
    return (
        <div>
            <Tippy
                interactive
                placement="bottom-start"
                offset={setOffset}
                delay={[600, 300]}
                zIndex={10}
                render={(attrs) => (
                    <div className={cx('profile-container')} tabIndex="-1" {...attrs}>
                        <div className={cx('head-container')}>
                            <Link to={`/@${data.nickname}`} className={cx('profile-link')}>
                                <Image className={cx('profile-avatar')} src={data.avatar} alt={data.full_name} />
                            </Link>
                            <Button types="primary" className={cx('profile-btn')}>
                                Follow
                            </Button>
                        </div>
                        <Link to={`/@${data.nickname}`} className={cx('profile-title')} target="_blank">
                            <h4 className={cx('profile-title')}>
                                {data.full_name}
                                {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                            </h4>
                        </Link>
                        <Link to={`/@${data.nickname}`} className={cx('profile-desc')} target="_blank">
                            {data.nickname}
                        </Link>
                        <p className={cx('profile-index')}>
                            <span className={cx('follows-count')}>{data.followers_count}</span>
                            <span className={cx('follow-label')}>Followers</span>
                            <span className={cx('likes-count')}>{data.likes_count}</span>
                            <span className={cx('likes-label')}>Likes</span>
                        </p>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

PopperInfo.protoTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
    offset: PropTypes.array,
};

export default memo(PopperInfo);
