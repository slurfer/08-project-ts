import Card from "../UI/Card";
import styles from "./UserList.module.css";
import UserInterface from "../../types/UserInterface";
import UserItem from "./UserItem";

const UserList = ({ users }: { users: UserInterface[] }) => {
  return (
    <Card>
      <div className={styles.user_list}>
        <ul>
          {users.map((user) => {
            console.log(user);
            return <UserItem user={user} />;
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
