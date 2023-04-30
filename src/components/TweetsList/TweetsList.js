import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TweetCard from '../TweetCard/TweetCard';
// import Loader from '../Loader/Loader';
// import Modal from 'components/Modal/Modal';
// import Button from 'components/Button/Button';

export default function TweetsList({ searchQuery, page, onClick, newFetch }) {
  const [tweetsList, setTweetsList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    // if (!searchQuery) {
    //   return;
    // }
    setStatus('pending');
    fetch(
      `https://63d18414120b32bbe8fa05c2.mockapi.io/tweets?page=${page}&limit=3`
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
          return setTweetsList([tweetsList]);
        }

        return Promise.reject(new Error(`По запиту твітів не знайдено`));
      })
      .catch(error => {
        setStatus('rejected');
        return setError(error);
      });
  }, [newFetch, page, searchQuery]);

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
        <ul>
          {tweetsList.map(item => (
            <li key={item.id}>
              <TweetCard item={item} />
            </li>
          ))}
        </ul>
        {/* {gallery.length !== Math.ceil(gallery[0].totalHits / 12) && (
          <Button onClick={onClick} /> */}
        {/* )} */}
      </div>
    );
  }
}

TweetsList.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  onClick: PropTypes.func,
  newFetch: PropTypes.bool,
};
