import Header from '@app/Header';
import Stepper from '@app/Stepper';
import Container from '@design/Container';
import styled from 'styled-components';
import Image from 'next/image';

const CheckoutView = styled.div`
  display: flex;
  min-height: 630px;
  width: 100%;
  margin-top: 47px;
`;

const CheckoutImage = styled.div`
  flex: 40%;
  max-width: 40%;
  border-radius: 10.8766px;
  position: relative;
  overflow: hidden;
  margin-right: 38px;
`;

const CheckoutDetails = styled.div`
  flex: 60%;
  background: #f7f7f7;
  border-radius: 10.8766px;
  padding: 30px;
`;

const Checkout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <Stepper />
        <CheckoutView>
          <CheckoutImage>
            <Image
              src="https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/ss-sneaker-maxres.png"
              layout="fill"
              objectFit="cover"
            />
          </CheckoutImage>
          <CheckoutDetails> Detais</CheckoutDetails>
        </CheckoutView>
      </Container>
    </>
  );
};

export default Checkout;
