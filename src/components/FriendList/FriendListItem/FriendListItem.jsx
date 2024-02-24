import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.listItem}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.statusonline : css.statusoffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
