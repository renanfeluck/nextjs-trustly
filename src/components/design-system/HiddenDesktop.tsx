import styled from 'styled-components';

const HiddenDesktop = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export default HiddenDesktop;
