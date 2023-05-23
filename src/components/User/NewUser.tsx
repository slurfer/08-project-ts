import styles from "./NewUser.module.css";
import Input from "../UI/Input";
import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";
import UserInterface from "../../types/UserInterface";
import ErrorInterface from "../../types/ErrorInterface";
import Error from "../Error/Error";


const NewUser = ({onNewUser}: {onNewUser: (user: UserInterface)=> void}) => {
  /**
   * Component for adding a new user
   * handles input of new user and passes it to parent component
   */
  const [enteredUsernname, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  type InputHandler = (input: any) => void;
  const usernameChangeHandler: InputHandler = (event) => {
    /**
     * handles state change of username input from child components
     */
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler: InputHandler = (event) => {
    /**
     * handles state change of age input from child components
     */
    setEnteredAge(event.target.value);
  };

    

  const submitHandler = (event: any) => {
    /**
     * handles form submission
     * passes new user data to parent component
     * resets state
     * handles errors
     */
    event.preventDefault();
    if(enteredAge.trim().length === 0 || enteredUsernname.trim().length === 0){
      const errorObject : ErrorInterface = {
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      };
      setError(errorObject);
      return;
    }
    if(+enteredAge < 1){
      const errorObject : ErrorInterface = {
        title: "Invalid age",
        message: "Please enter age with value greater or equal to 1.",
      };
      setError(errorObject);
      return;
    }
    const userData: UserInterface = {
      name: enteredUsernname,
      age: enteredAge,
    };
    console.log(userData);
    onNewUser(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const [error, setError] = useState<any>();
  const onError = () => {
    console.log("onError")
    setError(null);
  };
  return (
    <Card>
      {error && <Error errorObject={error} onClose={onError}/>}
      <div className={styles.new_user}>
        <form  onSubmit={submitHandler}>
          <div className={styles.new_user__controls}>
            <div className={styles.new_user__control}>
              <label>Username</label>
              <Input
                type="text"
                onChange={usernameChangeHandler}
                value={enteredUsernname}
              />
            </div>
            <div className={styles.new_user__control}>
              <label>Age (Years)</label>
              <Input
                type="number"
                onChange={ageChangeHandler}
                value={enteredAge}
              />
            </div>
          </div>
          <div className={styles.new_user__actions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default NewUser;
