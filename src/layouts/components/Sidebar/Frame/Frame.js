import classNames from 'classnames/bind';

import styles from './Frame.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Frame() {
    return (
        <div className={cx('container')}>
            <p className={cx('info-login')}>Log in to follow creators, like videos, and view comments.</p>
            <Button types="outlinePrimary" className={cx('nav-btn--login')}>
                Log in
            </Button>
        </div>
    );
}

export default Frame;
