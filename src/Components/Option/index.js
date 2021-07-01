import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Right } from '../../assets/chevron-right.svg';
import { ReactComponent as Down } from '../../assets/chevron-down.svg';
export default function Option (props) {
    const { children, title } = props;
    const [open, setOpen] = useState();
    
    function handleClick () {
        open == false ? setOpen(true) : setOpen(false);
    }

    return (
        <div className={open ? styles.containerPressed : styles.container } onClick={handleClick}>
            <a>{ children }</a>
            <div className={styles.div}>
                <div className={styles.title}>
                <h1>{ title }</h1>
                </div>
                {
                    open ? <Down stroke='var(--grey)' height='20px'/> : <Right stroke='var(--grey)' height='20px'/>
                }
                    
            </div>
        </div>
    )
}