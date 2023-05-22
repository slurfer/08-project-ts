import ButtonType from '../../types/ButtonType';
import styles from './Button.module.css';


const Button = (props: ButtonType) => {
    /**
     * Standard button component
     */
    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;