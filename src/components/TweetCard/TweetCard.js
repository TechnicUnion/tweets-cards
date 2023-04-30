import React from 'react';

import logo from '../../image/logo.svg';
import picture from '../../image/picture2 1.png';
import elipse from '../../image/elipse.svg';
import rectangl from '../../image/rectangle.svg';
import { Avatar, Image, Logo } from './TweetCard.styled';
// import PropTypes from 'prop-types';

// const TweetCard = ({ item, onDeleteClick }) => (
//   <div>
//     {item.name}: <span>{item.phone}</span>
//     <button type="button" onClick={() => onDeleteClick(item.id)}>
//       Delete
//     </button>
//   </div>
// );
const onDeleteClick = () => console.log('On button click');

const TweetCard = ({ item }) => {
  console.log(item.tweets);
  return (
    <>
      <Logo src={logo} alt={'Logo'} width={76} />
      <Image src={picture} alt={item.user} />
      <img src={rectangl} alt={'Logo'} />
      <Avatar src={item.avatar} alt={item.user} />
      <h3>{item.tweets} TWEETS</h3>
      <h3>{item.followers} FOLLOWERS</h3>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </>
  );
};

export default TweetCard;

// TweetCard.propTypes = {
//   item: PropTypes.object.isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
// };
