import Container from '@design/Container';
import styled from 'styled-components';
import Link from 'next/link';
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

const BackLink = styled(Link)`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
`;

type HeaderProps = {
  back?: boolean;
};

const Header = ({ back }: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <HeaderContainer>
        {back && (
          <BackLink href="/">
            <a>Back</a>
          </BackLink>
        )}
        <Title> Sneakers </Title>
        <ProfilePicture src="/profile.png" />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
