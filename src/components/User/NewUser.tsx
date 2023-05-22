import styles from "./NewUser.module.css";
import Input from "../UI/Input";
import Card from "../UI/Card";
import { useState } from "react";
import InputHandler from "../../types/InputHandler";
import Button from "../UI/Button";
import UserInterface from "../../types/UserInterface";



const NewUser = ({onNewUser}: {onNewUser: (user: UserInterface)=> void}) => {
  /**
   * Component for adding a new user
   * handles input of new user and passes it to parent component
   */
  const [enteredUsernname, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

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
     */
    event.preventDefault();
    if(enteredAge.trim().length === 0 || enteredUsernname.trim().length === 0){
      return;
    }
    if(+enteredAge < 1){
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
  return (
    <Card>
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
