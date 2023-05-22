import React from 'react';
import styles from './Card.module.css';

const Card = ({children}: {children: any}) => {
    /**
     * Standard layout card component
     * defines background width margin and border 
     */
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}

export default Card;