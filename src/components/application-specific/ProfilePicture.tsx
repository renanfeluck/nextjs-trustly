import styled from 'styled-components';

const StyledProfilePicture = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

type ProfilePicturePros = {
  src: string;
};

const ProfilePicture = ({ src }: ProfilePicturePros): JSX.Element => {
  return <StyledProfilePicture src={src} />;
};

export default ProfilePicture;
