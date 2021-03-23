import Container from '@design/Container';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';

const StyledHeader = styled.div`
  height: 87px;
  background: #f1f1f1;
  position: relative;
`;

const Title = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 26.1038px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderContainer = styled(Container)`
  height: 87px;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Title> Sneakers </Title>
        <ProfilePicture src="/profile.png" />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
