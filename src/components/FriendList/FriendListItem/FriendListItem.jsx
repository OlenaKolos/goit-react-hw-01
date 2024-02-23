//import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.listItem}>
      <img className={css.image} src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.name}>{friend.name}</p>
      <p
        className={
          (css.state,
          {
            [css.isOnline]: friend.isOnline,
          })
        }
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
