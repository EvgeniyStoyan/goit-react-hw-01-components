import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span className={friend.isOnline ? s.green : s.red}></span>
          <img
            className={s.avatar}
            src={friend.avatar ?? defaultImage}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
