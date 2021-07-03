import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Right } from '../../assets/chevron-right.svg';
export default function DropOption ({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <div className={styles.title}>
                <span></span>
                <h1>{ children }</h1>
                </div>
            </div>
                <Right stroke='var(--grey)' height='20px'/>  
        </div>
    )
}