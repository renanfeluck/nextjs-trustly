import Container from '@design/Container';
import styled from 'styled-components';
import Link from 'next/link';
import ProfilePicture from './ProfilePicture';
import BackArrow from '@static/back-arrow.svg';

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

const BackButton = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
  border: none;
  padding: 4px 21px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 21.7531px;
  line-height: 25px;

  display: flex;
  align-items: center;

  color: #000000;

  svg {
    margin-right: 8.7px;
  }
`;

type HeaderProps = {
  back?: boolean;
};

const Header = ({ back }: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <HeaderContainer>
        {back && (
          <Link href="/">
            <a>
              <BackButton>
                <BackArrow />
                <span>Back</span>
              </BackButton>
            </a>
          </Link>
        )}
        <Title> Sneakers </Title>
        <ProfilePicture src="/profile.png" />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
