import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function Statistics (props) {
    const { children, title } = props;
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <h2>{title}</h2>
                <h1>{children}</h1>
            </div>
        </div>
    )
}