import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
import { List, CardContainer } from './TweetList.styled';
import { ButtonWhite } from 'components/TweetCard/TweetCard.styled';
// import Loader from '../Loader/Loader';
// import Modal from 'components/Modal/Modal';
// import Button from 'components/Button/Button';

export default function TweetsList({ limit, onClick, newFetch }) {
  const [tweetsList, setTweetsList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    // if (!searchQuery) {
    //   return;
    // }
    setStatus('pending');
    fetch(
      `https://63d18414120b32bbe8fa05c2.mockapi.io/tweets?page=1&limit=${limit}`
    )
      .then(response => response.json())
      .then(tweetsList => {
        if (tweetsList.length > 0) {
          // eslint-disable-next-line no-sequences
          return setTweetsList(tweetsList), setStatus('resolved');
        }

        return Promise.reject(new Error(`По запиту твітів не знайдено`));
      })
      .catch(error => {
        setStatus('rejected');
        return setError(error);
      });
  }, [newFetch, limit]);

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <List>
          {tweetsList.map(item => (
            <CardContainer key={item.id}>
              <TweetCard item={item} />
            </CardContainer>
          ))}
        </List>
        {limit <= tweetsList.length && (
          <ButtonWhite type="button" onClick={onClick}>
            Load more
          </ButtonWhite>
        )}
      </div>
    );
  }
}

// TweetsList.propTypes = {
//   searchQuery: PropTypes.string,
//   page: PropTypes.number,
//   onClick: PropTypes.func,
//   newFetch: PropTypes.bool,
// };
