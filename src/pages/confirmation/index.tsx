import Header from '@app/Header';
import Stepper from '@app/Stepper';
import Container from '@design/Container';
import styled from 'styled-components';
import Image from 'next/image';
import CheckoutPaymentButton from '@app/Checkout/CheckoutPaymentButton';
import { useEffect, useMemo, useState } from 'react';
import Button from '@design/Button';
import { Head } from 'next/document';
import loadPayWithMyBank from '@helpers/loadPayWithMyBank';
import { ProductInfo } from 'types/product';
import CheckoutImage from '@app/Checkout/CheckoutImage';
import CheckoutDetails from '@app/Checkout/CheckoutDetais';
import CheckoutDetailsInfo from '@app/Checkout/CheckoutDetaisInfo';
import CheckoutView from '@app/Checkout/CheckoutView';
import CheckoutTitle from '@app/Checkout/CheckoutTitle';
import CheckoutGrayText from '@app/Checkout/CheckoutGrayText';
import CheckoutPriceText from '@app/Checkout/CheckoutPriceText';
import Bank from '@static/bank.svg';
import { useRouter } from 'next/dist/client/router';

const PlaceOrder = styled.div`
  width: 100%;
  display: flex;
`;

const TotalCost = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: fit-content;
`;

const ConfirmationPriceText = styled(CheckoutPriceText)`
  text-align: left;
  margin-left: 32px;
`;

const PaymentMethodBox = styled.div`
  display: flex;
  algign-items: center;
`;

const Checkout = (): JSX.Element => {
  const [cartInfo, setCartInfo] = useState<ProductInfo>();
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();

  useEffect(() => {
    const localCartInfo = localStorage.getItem('cart');

    if (localCartInfo) {
      const parsedLocalCartInfo = JSON.parse(localCartInfo);

      setCartInfo(JSON.parse(localCartInfo));
      setImageUrl(parsedLocalCartInfo.maxresURL);
    }
  }, []);

  const placeOrder = e => {
    alert('Order Placed');
    router.push('/');
  };

  return (
    <>
      <Header back />
      <Container>
        <Stepper />
        <CheckoutView>
          <CheckoutImage>
            {imageUrl && <Image src={imageUrl} layout="fill" objectFit="cover" />}
          </CheckoutImage>
          <CheckoutDetails>
            <CheckoutDetailsInfo>
              <CheckoutTitle>Order summary</CheckoutTitle>

              <p>{cartInfo?.description}</p>

              <CheckoutGrayText>x 1 Green Size 41 Item #2839u512401</CheckoutGrayText>
            </CheckoutDetailsInfo>
            <CheckoutDetailsInfo>
              <CheckoutTitle>Payment Method</CheckoutTitle>

              <PaymentMethodBox>
                <Bank /> <span>Online Banking</span>
              </PaymentMethodBox>
            </CheckoutDetailsInfo>

            <PlaceOrder>
              <TotalCost>
                <div>
                  <p>Total cost</p>
                  <CheckoutGrayText>Delivery included</CheckoutGrayText>
                </div>
                <ConfirmationPriceText>$100</ConfirmationPriceText>
              </TotalCost>

              <Button onClick={placeOrder}> Place Order </Button>
            </PlaceOrder>
          </CheckoutDetails>
        </CheckoutView>
      </Container>
    </>
  );
};

export default Checkout;
