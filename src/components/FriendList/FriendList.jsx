import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((item) => {
        return (
          <div className={css.item} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default FriendList;
