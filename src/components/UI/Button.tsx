import styles from "./Button.module.css";

interface ButtonType {
  onClick?: (event: any) => void;
  type: "submit" | "button" | "reset" | undefined;
  children: any;
}

const Button = (props: ButtonType) => {
  /**
   * Standard button component
   */
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
