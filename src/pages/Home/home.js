import { useLocation } from 'react-router-dom';
import { Container, Welcome, NavItem } from './home.styled';

export default function Home() {
  const location = useLocation();
  return (
    <Container>
      <Welcome>Select a tweet to follow</Welcome>
      <NavItem to={`/tweets`} state={{ from: location }}>
        Start
      </NavItem>
    </Container>
  );
}
