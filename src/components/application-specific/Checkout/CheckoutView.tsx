import styled from 'styled-components';

const CheckoutView = styled.div`
  display: flex;
  min-height: 630px;
  width: 100%;
  margin-top: 47px;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default CheckoutView;
