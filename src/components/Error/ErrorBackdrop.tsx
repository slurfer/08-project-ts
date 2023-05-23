import styles from "./ErrorBackdrop.module.css";

const ErrorModal= ({onClose}: {onClose: () => void}) => <div onClick={onClose} className={styles.errorModal}></div>

export default ErrorModal;