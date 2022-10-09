import React from 'react';
import classNames from 'classnames/bind';

import styles from './404.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { NotFoundIcon } from '~/components/Icons';
import images from '~/assets/images';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <>
            <div className={cx('error-wrapper')}>
                <div className={cx('error-container')}>
                    <h1 className={cx('error-title')}>
                        <span>4</span>
                        <Image className={cx('error-img')} src={images.notFound} />
                        <span>4</span>
                    </h1>
                    <p className={cx('error-desc')}>Couldn't find this page</p>
                    <p className={cx('error-notice')}>Check out more trending videos on TikTok</p>
                    <Button types="primary" to="/" className={cx('error-link')} leftIcon={<NotFoundIcon />}>
                        <span className={cx('error-label')}>Watch now</span>
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
