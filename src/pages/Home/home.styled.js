import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { Title } from 'styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 30vh;
  flex-direction: column;
  align-items: center;
`;

export const Welcome = styled.h1`
  font-size: 60px;
  margin-bottom: 0;
`;

export const NavItem = styled(NavLink)`
  margin-top: 24px;
  padding: 10px;
  font-size: 48px;
  text-decoration: none;
  border: 4px solid ${props => props.theme.color.activeLinkColor};
  border-radius: 20px;
  color: ${props => props.theme.color.activeLinkColor};
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: ${props => props.theme.color.activeLinkColor};
  }
`;
