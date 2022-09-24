import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Language({ title, onBack }) {
    return (
        <header className={cx('header-language')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className={cx('header-title')}>{title}</p>
        </header>
    );
}

export default Language;
