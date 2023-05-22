import UserInterface from "../../types/UserInterface";
import styles from "./UserItem.module.css";

const UserItem = ({user}: {user: UserInterface}) => {
    return (
        <div className={styles.user_item}>
            {user.name} ({user.age} year{+user.age>1 && 's'} old)
        </div>
    );
};

export default UserItem;