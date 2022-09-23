import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ types, customClass, className, children, ...passProps }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [types]: types,
        [customClass]: customClass,
        [className]: className,
    });
    const props = {
        ...passProps,
    };

    if (types === 'disabled') {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (props.to) {
        Comp = Link;
    } else if (props.href) {
        Comp = 'a';
    } else if (props.tagDiv) {
        Comp = 'div';
    } else {
        Comp = 'span';
    }
    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
