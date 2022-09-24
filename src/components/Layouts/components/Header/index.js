import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Search from '../Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MENU_ITEMS, userMenu } from '~/components/Contains';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

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
                    <div className={cx('search-container')}>{<Search />}</div>
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
                                    <span className={cx('badge')}>6</span>
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
