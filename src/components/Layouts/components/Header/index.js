import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MENU_ITEMS, userMenu } from '~/components/Contains';
import { SearchIcon, UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = false;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 5000);
    }, []);
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('logo')} to="/">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <div className={cx('container-center')}>
                    <div className={cx('search-container')}>
                        <HeadlessTippy
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
                                <input placeholder="Search accounts and videos" />
                                <button className={cx('clear')} type="reset">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                                </button>
                                <span className={cx('splitter')}></span>
                                <button className={cx('search-btn')}>
                                    <SearchIcon />
                                </button>
                            </form>
                        </HeadlessTippy>
                    </div>
                </div>
                <div className={cx('container-right')}>
                    {currentUser ? (
                        <>
                            <Button
                                types="outline"
                                customClass="upload--btn"
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                tagDiv
                            >
                                Upload
                            </Button>
                            <Tippy content="Message" placement="bottom">
                                <Button className={cx('message--icon')} tagDiv>
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <Button className={cx('inbox--icon')} tagDiv>
                                    <InboxIcon />
                                </Button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button types="outline" customClass="upload--btn" leftIcon={<UploadIcon />} tagDiv>
                                Upload
                            </Button>
                            <Button types="primary" customClass="login--btn">
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src="" alt="User" />
                        ) : (
                            <i className={cx('more-icon-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </i>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
