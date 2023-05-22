import React from 'react';
import styles from './Input.module.css';
import InputInterface from '../../types/InputInterface';



const Input = (props: InputInterface) => {
    /**
     * Standard input field component
     */
    return (
        <input type={props.type} className={styles.input_field} onChange={props.onChange} value={props.value} />
    )
}

export default Input;