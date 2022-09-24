import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`@${data.username}`} className={cx('wrapper-item')}>
            <span className={cx('container-avatar')}>
                <Image className={cx('img-avatar')} src="" alt={data.name} />
            </span>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    {data.name}
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <p className={cx('item-desc')}>{data.username}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
