import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 5000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('logo')} to="/">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <div className={cx('container-center')}>
                    <div className={cx('search-container')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('wrapper-search')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className={cx('wrapper-title')}>Accounts</div>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <div className={cx('wrapper-item')}>
                                            <p className={cx('more-text')}>View all results for "a"</p>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <form className={cx('form-element')} action="#">
                                <input placeholder="Tìm kiếm tài khoản và video" />
                                <button className={cx('clear')} type="reset">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                                </button>
                                <span className={cx('splitter')}></span>
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('container-right')}>
                    <Button types="outline" customClass="upload--btn" tagDiv>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </Button>
                    <Button types="primary" customClass="login--btn">
                        Login
                    </Button>
                    <i className={cx('more-icon-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </i>
                </div>
            </div>
        </header>
    );
}

export default Header;
