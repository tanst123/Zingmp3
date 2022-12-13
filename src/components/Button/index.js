import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,

            onClick,
            children,
            type,
            size,
            disable = false,
            outline = false,
            leftIcon,
            rightIcon,
            className,
            className1,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';

        const props = {
            onClick,
            ...passProps,
        };

        if (disable) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }
        if (to) {
            Comp = Link;
            props.to = to;
        }
        if (href) {
            Comp = 'a';
            props.href = href;
        }

        const classes = cx('wrapper', {
            [className]: className,
            [className1]: className1,
            [type]: type,
            [size]: size,
            disable,
            outline,
        });

        return (
            <Comp className={classes} {...props} ref={ref}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('children')}>{children}</span>
                {rightIcon && <span className={cx('icon', className1)}>{rightIcon}</span>}
            </Comp>
        );
    },
);

export default Button;
