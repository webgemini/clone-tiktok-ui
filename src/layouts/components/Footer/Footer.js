import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import { QrCodeIcon, LogoPrimaryIcon, ArrowDownIcon } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    const dateCurrent = new Date();

    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-header')}>
                <div className={cx('header-wrapper')}>
                    <span className={cx('header-title')}>Download now</span>
                    <div className={cx('header-container')}>
                        <Link to="/" className={cx('header-link')}>
                            <QrCodeIcon />
                            <span className={cx('header-span-qr')}>QR CODE</span>
                        </Link>
                        <Link to="/" className={cx('header-link')}>
                            <img src={images.footerMicrosoft} className={cx('header-img-microsoft')} alt="Microsoft" />
                        </Link>
                        <Link to="/" className={cx('header-link')}>
                            <div className={cx('header-app-store')}></div>
                        </Link>
                        <Link to="/" className={cx('header-link')}>
                            <div className={cx('header-amazon')}></div>
                        </Link>
                        <Link to="/" className={cx('header-link')}>
                            <div className={cx('header-google-play')}></div>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className={cx('footer-body')}>
                <div className={cx('body-logo')}>
                    <Link className={cx('body-logo-link')}>
                        <LogoPrimaryIcon />
                    </Link>
                </div>
                <div className={cx('body-container')}>
                    <h4 className={cx('body-title')}>Company</h4>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>About</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>TikTok Browse</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Newsroom</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Contact</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Careers</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>ByteDance</span>
                    </Link>
                </div>
                <div className={cx('body-container')}>
                    <h4 className={cx('body-title')}>Programs</h4>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>TikTok for Good</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Advertise</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Developers</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>TikTok Rewards</span>
                    </Link>
                </div>
                <div className={cx('body-container')}>
                    <h4 className={cx('body-title')}>Support</h4>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Help Center</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Safety Center</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Creator Portal</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Community Guidelines</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Transparency</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Accessibility</span>
                    </Link>
                </div>
                <div className={cx('body-container')}>
                    <h4 className={cx('body-title')}>Legal</h4>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Terms of Use</span>
                    </Link>
                    <Link className={cx('body-link')}>
                        <span className={cx('body-span-content')}>Privacy Policy</span>
                    </Link>
                </div>
            </footer>
            <div className={cx('footer-bottom')}>
                <div className={cx('footer-select-language')}>
                    <p className={cx('select-language-label')}>
                        <span>English</span>
                    </p>
                    <ArrowDownIcon />
                    <select name="language">
                        <option value="english">English</option>
                        <option value="vietnamese">Tiếng việt</option>
                    </select>
                </div>
                <div className={cx('bottom-copyright')}>© {dateCurrent.getFullYear()} Tiktok</div>
            </div>
        </div>
    );
}

export default Footer;
