import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data, classNameLAvatar, classNameLInfo, classNameTitle, classNameDesc }) {
    return (
        <>
            <Link to={`/@${data.nickname}`} className={cx('avatar-link', { [classNameLAvatar]: classNameLAvatar })}>
                <div className={cx('wrapper-avatar')}>
                    <Image className={cx('account-avatar')} src={data.avatar} alt={data.full_name} />
                </div>
            </Link>
            <Link to={`/@${data.nickname}`} className={cx('link-content', { [classNameLInfo]: classNameLInfo })}>
                <div className={cx('title-content')}>
                    <h3 className={cx('title-item', { [classNameTitle]: classNameTitle })}>
                        {data.full_name}
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                    </h3>
                </div>
                <h4 className={cx('desc-item', { [classNameDesc]: classNameDesc })}>{data.nickname}</h4>
            </Link>
        </>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    classNameLAvatar: PropTypes.string,
    classNameLInfo: PropTypes.string,
    classNameTitle: PropTypes.string,
    classNameDesc: PropTypes.string,
};

export default memo(AccountItem);
