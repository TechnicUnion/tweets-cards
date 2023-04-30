import React, { useState } from 'react';
// import Searchbar from './Searchbar/Searchbar';
import TweetsList from './TweetsList/TweetsList';
import { animateScroll as scroll } from 'react-scroll';

export default function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(3);
  const [newFetch, setNewFetch] = useState(true);

  // const formSubmitHandler = data => {
  //   if (searchQuery !== data) {
  //     setSearchQuery(data);
  //     setPage(1);
  //     setNewFetch(true);
  //   }
  // };

  const loadMore = () => {
    setLimit(prevState => prevState + 3);
    setNewFetch(false);
    scroll.scrollToBottom();
  };

  return (
    <div>
      {/* <Searchbar onSubmit={formSubmitHandler} /> */}
      <div>
        <TweetsList
          // searchQuery={searchQuery}
          limit={limit}
          newFetch={newFetch}
          onClick={loadMore}
        />
      </div>
    </div>
  );
}
