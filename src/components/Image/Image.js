import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, fallback, className, width, height, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImg);
    };

    return (
        <span className={cx('container-avatar', className)} style={{ width: width, height: height }}>
            <img
                ref={ref}
                className={cx('img-avatar')}
                src={fallback || _fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
                loading="lazy"
            />
        </span>
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
