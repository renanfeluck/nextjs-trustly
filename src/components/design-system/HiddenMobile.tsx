import styled from 'styled-components';

const HiddenMobile = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export default HiddenMobile;
