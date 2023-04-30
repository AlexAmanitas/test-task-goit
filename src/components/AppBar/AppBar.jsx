import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/test-task-goit/">Home</StyledLink>
          <StyledLink to="/test-task-goit/cards">Cards</StyledLink>
          <StyledLink to="/test-task-goit/tweets">Tweets</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default AppBar;
