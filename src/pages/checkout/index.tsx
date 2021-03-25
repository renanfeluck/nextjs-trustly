import Header from '@app/Header';
import Stepper from '@app/Stepper';
import Container from '@design/Container';
import styled from 'styled-components';
import Image from 'next/image';
import CheckoutPaymentButton from '@app/CheckoutPaymentButton';
import { useEffect, useState } from 'react';
import Button from '@design/Button';
import { Head } from 'next/document';
import loadPayWithMyBank from '@helpers/loadPayWithMyBank';

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
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const CheckoutDetailsInfo = styled.div`
  flex: 50%;
  width: 50%;
`;

const CheckoutTitle = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
`;

const CheckoutGrayText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 153.3%;
  letter-spacing: 0.612903px;
  color: #979797;
`;

const PriceText = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 43.5063px;
  line-height: 44px;
  color: #000000;
  width: 50%;
  text-align: right;
`;

const PaymentBox = styled.div`
  width: 100%;
`;

const Checkout = (): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const pay = e => {
    e.preventDefault();
    loadPayWithMyBank();
  };
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
          <CheckoutDetails>
            <CheckoutDetailsInfo>
              <CheckoutTitle>Cart total</CheckoutTitle>

              <p>SS Sneaker</p>

              <CheckoutGrayText>x 1 Green Size 41 Item #2839u512401</CheckoutGrayText>
            </CheckoutDetailsInfo>
            <CheckoutDetailsInfo>
              <CheckoutTitle>Delivery details</CheckoutTitle>

              <CheckoutGrayText>
                John Smith Phone no: 01312428200 Address: Redwood City, 2000.
              </CheckoutGrayText>
              <CheckoutDetails>
                <div>
                  <p>Total cost</p>
                  <CheckoutGrayText>Delivery included</CheckoutGrayText>
                </div>

                <PriceText>$100</PriceText>
              </CheckoutDetails>
            </CheckoutDetailsInfo>
            <PaymentBox>
              <CheckoutTitle> Select your payment method </CheckoutTitle>
              <form>
                <CheckoutPaymentButton checked={paymentMethod === 'bank'}>
                  Online Banking <Image src="/banks.png" alt="" width="176px" height="29px" />
                  <input
                    type="radio"
                    name="method"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                </CheckoutPaymentButton>
                <CheckoutPaymentButton checked={paymentMethod === 'cards'}>
                  Card Payment <Image src="/cards.png" alt="" width="85px" height="24px" />
                  <input
                    type="radio"
                    name="method"
                    value="cards"
                    checked={paymentMethod === 'cards'}
                    onChange={() => setPaymentMethod('cards')}
                  />
                </CheckoutPaymentButton>

                <CheckoutPaymentButton checked={paymentMethod === 'apple'}>
                  Apple Pay <Image src="/applePay.png" alt="" width="66px" height="35px" />
                  <input
                    type="radio"
                    name="method"
                    value="apple"
                    checked={paymentMethod === 'apple'}
                    onChange={() => setPaymentMethod('apple')}
                  />
                </CheckoutPaymentButton>

                <Button onClick={pay}> Continue </Button>
              </form>
            </PaymentBox>
          </CheckoutDetails>
        </CheckoutView>
      </Container>
    </>
  );
};

export default Checkout;
