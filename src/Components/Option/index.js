import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Right } from '../../assets/chevron-right.svg';
import { ReactComponent as Down } from '../../assets/chevron-down.svg';
export default function Option (props) {
    const { children = false, title, icon } = props;
    const [open, setOpen] = useState(false);
    const options = useRef(null)

    function handleClick () {
        setOpen(!open)
        const { current } = options;
        if(current !== null && children) {
            current.animate([{
                height: open ? '0px' : '188px',
            }],{
                duration: 300,
                fill: 'forwards',
            })
        }
    }

    return (
        <>
        <div className={open ? styles.containerPressed : styles.container } onClick={handleClick}>
            <a>{ icon }</a>
            <div className={styles.div}>
                <div className={styles.title}>
                <h1>{ title }</h1>
                </div>
                {
                    open ? <Down stroke='var(--grey)' height='20px'/> : <Right stroke='var(--grey)' height='20px'/>
                }
                    
            </div>
        </div>
        {
            <div ref={options} className={styles.options}>
                { children }
            </div> 
        }
        </>
    )
}