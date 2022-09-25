import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ className, src, alt, fallback = images.noImg, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            ref={ref}
            className={cx('wrapper', className)}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
