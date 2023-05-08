import { Html, useProgress } from '@react-three/drei';
import React from 'react';
import styles from './CanvasLoader.module.scss';

export const LoaderCanvas = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span className='canvas-load'></span>
            <p className={styles.loader}>{progress.toFixed(2)}%</p>
        </Html>
    );
};
