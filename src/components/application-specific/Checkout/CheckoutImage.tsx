import styled from 'styled-components';

const CheckoutImage = styled.div`
  flex: 100%;
  max-width: 100%;
  border-radius: 10.8766px;
  position: relative;
  overflow: hidden;
  margin-right: 38px;
  @media screen and (min-width: 1024px) {
    flex: 40%;
    max-width: 40%;
  }
`;

export const MobileCheckoutImage = styled(CheckoutImage)`
  height: 92px;
  width: 106px;
`;

export default CheckoutImage;
