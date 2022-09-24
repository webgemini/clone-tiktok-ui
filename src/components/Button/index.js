import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    { types, customClass, className, children, to, href, tagDiv, leftIcon, rightItem, onClick, ...passProps },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (types === 'disabled') {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else if (tagDiv) {
        Comp = 'div';
    }
    const classes = cx('wrapper', {
        [types]: types,
        [customClass]: customClass,
        [className]: className,
    });
    return (
        <Comp ref={ref} className={classes} {...props}>
            {leftIcon && leftIcon}
            <span>{children}</span>
            {rightItem && rightItem}
        </Comp>
    );
}

export default forwardRef(Button);
