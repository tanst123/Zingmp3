import { useState } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';

import images from '../../assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.userDefault);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
});

export default Image;
