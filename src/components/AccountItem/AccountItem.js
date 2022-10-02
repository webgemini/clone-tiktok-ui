import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper-item', { [className]: className })}>
            <Image className={cx('search-avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                </h4>
                <p className={cx('item-desc')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default AccountItem;
