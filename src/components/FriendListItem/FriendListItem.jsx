import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  // Generate Random Color
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };
  const backgroundColor = isOnline
    ? 'rgba(229, 247, 230, 0.8)'
    : 'rgba(247, 229, 229, 0.8)'; // Light shades of green and red

  return (
    <li className={css.friendListItem} style={{ backgroundColor }}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        style={{ backgroundColor: generateRandomColor() }}
        src={avatar}
        alt="User avatar"
        width="70"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
