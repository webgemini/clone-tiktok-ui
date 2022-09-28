import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const dateCurrent = new Date();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('link-container')}>
                <Link className={cx('nav-link')} to="/about?lang=en" target="_blank">
                    About
                </Link>
                <Link className={cx('nav-link')} to="/browse?lang=en" target="_blank">
                    TikTok Browse
                </Link>
                <Link className={cx('nav-link')} to="https://newsroom.tiktok.com/" target="_blank">
                    Newsroom
                </Link>
                <Link className={cx('nav-link')} to="/about/contact?lang=en" target="_blank">
                    Contact
                </Link>
                <Link className={cx('nav-link')} to="https://careers.tiktok.com/" target="_blank">
                    Careers
                </Link>
                <Link className={cx('nav-link')} to="https://www.bytedance.com/" target="_blank">
                    ByteDance
                </Link>
            </div>
            <div className={cx('link-container')}>
                <Link className={cx('nav-link')} to="/forgood" target="_blank">
                    TikTok for Good
                </Link>
                <Link className={cx('nav-link')} to="/business" target="_blank">
                    Advertise
                </Link>
                <Link className={cx('nav-link')} to="https://developers.tiktok.com/" target="_blank">
                    Developers
                </Link>
                <Link className={cx('nav-link')} to="/transparency?lang=en" target="_blank">
                    Transparency
                </Link>
                <Link className={cx('nav-link')} to="/tikTok-rewards" target="_blank">
                    TikTok Rewards
                </Link>
            </div>
            <div className={cx('link-container')}>
                <Link className={cx('nav-link')} to="/help?lang=en" target="_blank">
                    Help
                </Link>
                <Link className={cx('nav-link')} to="/safety?lang=en" target="_blank">
                    Safety
                </Link>
                <Link className={cx('nav-link')} to="/legal/terms-of-service" target="_blank">
                    Terms
                </Link>
                <Link className={cx('nav-link')} to="/legal/privacy" target="_blank">
                    Privacy
                </Link>
                <Link className={cx('nav-link')} to="/creator" target="_blank">
                    Creator Portal
                </Link>
                <Link className={cx('nav-link')} to="/community-guidelines" target="_blank">
                    Community Guidelines
                </Link>
            </div>
            <span className={cx('copyright')}>© {dateCurrent.getFullYear()} TikTok</span>
        </div>
    );
}

export default Footer;
