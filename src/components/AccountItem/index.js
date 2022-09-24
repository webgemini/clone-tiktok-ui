import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper-item')}>
            <span className={cx('container-avatar')}>
                <Image className={cx('img-avatar')} src="" alt="Avatar" />
            </span>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    asmr
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <p className={cx('item-desc')}>ASMR</p>
            </div>
        </div>
    );
}

export default AccountItem;
