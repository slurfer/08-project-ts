import ErrorInterface from "../../types/ErrorInterface";
import ReactDOM  from "react-dom";
import Backdrop from "./ErrorBackdrop";
import styles from "./Error.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Error = ({
  errorObject,
  onClose,
}: {
  errorObject: ErrorInterface;
  onClose: () => void;
}) => {
  /**
   * Component for displaying an error
   */
  const error_overlay = (
    <div className={styles.error}>
      <Card>
        <header className={styles.error__head}>
          <h2>{errorObject.title}</h2>
        </header>
        <div className={styles.error__content}>
          <p>{errorObject.message}</p>
          <div className={styles.error__controls}>
            <Button type="button" onClick={onClose}>
              Okay
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
  return (
    <>
      {ReactDOM.createPortal(error_overlay, document.getElementById("overlay-root")!)}
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
};

export default Error;
