import React, { useState } from 'react';
// import axios from 'axios';

import { separetesNumberWithComma } from '../../utils/separatesNumberWithComma';

import logo from '../../image/logo.svg';
import picture from '../../image/picture2 1.png';
import elipse from '../../image/elipse.svg';
import rectangl from '../../image/rectangle.svg';
import {
  Avatar,
  Image,
  Logo,
  Rectangl,
  Elipse,
  Text,
  TextWrap,
  ButtonWhite,
  ButtonGrine,
} from './TweetCard.styled';
// import PropTypes from 'prop-types';

const TweetCard = ({ item }) => {
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem(`card-${item.id}-Status`)) || {
      followers: item.followers,
    }
  );
  const onButtonClick = () => {
    if (status.isFollow) {
      localStorage.setItem(
        `card-${item.id}-Status`,
        JSON.stringify({
          isFollow: false,
          followers: status.followers - 1,
        })
      );
    } else {
      localStorage.setItem(
        `card-${item.id}-Status`,
        JSON.stringify({
          isFollow: true,
          followers: status.followers + 1,
        })
      );
    }

    setStatus(JSON.parse(localStorage.getItem(`card-${item.id}-Status`)));
  };

  return (
    <>
      <Logo src={logo} alt={'Logo'} width={76} />
      <Image src={picture} alt={item.user} />
      <Rectangl src={rectangl} alt={'rectangl'} />
      <Avatar src={item.avatar} alt={item.user} />
      <Elipse src={elipse} alt={'elips'} />
      <TextWrap>
        <Text>{item.tweets} TWEETS</Text>
        <Text>{separetesNumberWithComma(status.followers)} FOLLOWERS</Text>
      </TextWrap>
      {status.isFollow ? (
        <ButtonGrine type="button" onClick={onButtonClick}>
          FOLLOWING
        </ButtonGrine>
      ) : (
        <ButtonWhite type="button" onClick={onButtonClick}>
          FOLLOW
        </ButtonWhite>
      )}
    </>
  );
};

export default TweetCard;

// TweetCard.propTypes = {
//   item: PropTypes.object.isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
// };
