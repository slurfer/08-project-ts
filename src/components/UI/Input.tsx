import React from 'react';
import styles from './Input.module.css';


interface InputInterface {
    type: "text"|"number"|"date";
    onChange: (event: any) => void;
    value: string;
}


const Input = (props: InputInterface) => {
    /**
     * Standard input field component
     */
    return (
        <input type={props.type} className={styles.input_field} onChange={props.onChange} value={props.value} />
    )
}

export default Input;