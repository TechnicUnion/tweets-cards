import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets">Tweets</Link>
        </Nav>
      </Header>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
