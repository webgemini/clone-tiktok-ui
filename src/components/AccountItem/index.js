import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper-item')}>
            <span className={cx('container-avatar')}>
                <img
                    className={cx('img-avatar')}
                    src="https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1651185108860934~c5_300x300.webp?x-expires=1664028000&x-signature=WCS%2FH7t6n%2F%2BPO9bujSPYgU%2BeiYU%3D"
                    alt="avatar"
                />
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
