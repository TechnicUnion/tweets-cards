import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/home'));
const Tweets = lazy(() => import('../pages/Tweets/tweets'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
