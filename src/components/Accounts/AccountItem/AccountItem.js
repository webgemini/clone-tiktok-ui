import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            offset={[-20, 2]}
            delay={[600, 300]}
            render={(attrs) => (
                <div className={cx('profile-container')} tabIndex="-1" {...attrs}>
                    <div className={cx('head-container')}>
                        <Link to={`/@${data.nickname}`} className={cx('profile-link')}>
                            <span className={cx('profile-avatar')}>
                                <Image className={cx('img-avatar')} src={data.avatar} alt={data.full_name} />
                            </span>
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
            <div className={cx('user-container')}>
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('wrapper-avatar')}>
                        <span className={cx('container-avatar')}>
                            <Image className={cx('img-avatar')} src={data.avatar} alt={data.full_name} />
                        </span>
                    </div>
                </Link>
                <Link to={`/@${data.nickname}`} className={cx('link-content')}>
                    <div className={cx('title-content')}>
                        <h4 className={cx('title-item')}>
                            {data.full_name}
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                        </h4>
                    </div>
                    <p className={cx('desc-item')}>{data.nickname}</p>
                </Link>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
