import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
import { List, CardContainer } from './TweetList.styled';

// import Loader from '../Loader/Loader';
// import Modal from 'components/Modal/Modal';
// import Button from 'components/Button/Button';

export default function TweetsList({ page, onClick, newFetch }) {
  const [tweetsList, setTweetsList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  console.log(page);
  useEffect(() => {
    // if (!searchQuery) {
    //   return;
    // }
    setStatus('pending');
    fetch(
      `https://63d18414120b32bbe8fa05c2.mockapi.io/tweets?page=1&limit=${page}`
    )
      .then(response => response.json())
      .then(tweetsList => {
        if (tweetsList.length > 0 && !newFetch) {
          return (
            setTweetsList(prevState => [...prevState, tweetsList]),
            setStatus('resolved')
          );
        }
        if (newFetch && tweetsList.length > 0) {
          setStatus('resolved');
          return setTweetsList(tweetsList);
        }

        return Promise.reject(new Error(`По запиту твітів не знайдено`));
      })
      .catch(error => {
        setStatus('rejected');
        return setError(error);
      });
  }, [newFetch, page]);

  //   const openModal = data => {
  //     setShowModal(true);
  //     setLargeImage(data);
  //   };

  //   const closeModal = () => {
  //     setShowModal(false);
  //   };

  //   if (status === 'idle') {
  //     return <div>Введіть запит для пошуку</div>;
  //   }

  //   if (status === 'pending') {
  //     return <Loader />;
  //   }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <div>
        {/* {showModal && <Modal image={largeImage} onClose={closeModal} />} */}
        <List>
          {tweetsList.map(item => (
            <CardContainer key={item.id}>
              <TweetCard item={item} />
            </CardContainer>
          ))}
        </List>
        {/* {tweetsList.length !== Math.ceil(tweetsList[0].totalHits / 12) && ( */}
        <button type="button" onClick={onClick}>
          Load more
        </button>
        {/* )} */}
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
