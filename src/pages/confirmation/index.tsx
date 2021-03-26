import Header from '@app/Header';
import Stepper from '@app/Stepper';
import Container from '@design/Container';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Button from '@design/Button';
import loadPayWithMyBank from '@helpers/loadPayWithMyBank';
import { ProductInfo } from 'types/product';
import CheckoutImage, { MobileCheckoutImage } from '@app/Checkout/CheckoutImage';
import CheckoutDetails from '@app/Checkout/CheckoutDetais';
import CheckoutDetailsInfo from '@app/Checkout/CheckoutDetaisInfo';
import CheckoutView from '@app/Checkout/CheckoutView';
import CheckoutTitle from '@app/Checkout/CheckoutTitle';
import CheckoutGrayText from '@app/Checkout/CheckoutGrayText';
import CheckoutPriceText from '@app/Checkout/CheckoutPriceText';
import Bank from '@static/bank.svg';
import { useRouter } from 'next/dist/client/router';
import isMobile from '@helpers/isMobile';

const PlaceOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
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
  align-items: center;
`;

const ConfimationDetails = styled(CheckoutDetails)`
  flex-direction: column;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex: 100%;
  max-width: 100%;
  @media screen and (min-width: 1024px) {
    flex: 50%;
    max-width: 50%;
  }
`;

const ConfirmationDetailsInfo = styled.div`
  flex: 100%;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex: 100%;
    width: 100%;
  }
`;

const DetailPaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Checkout = (): JSX.Element => {
  const [cartInfo, setCartInfo] = useState<ProductInfo>();
  const [imageUrl, setImageUrl] = useState();
  const [mobile, setMobile] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setMobile(isMobile());
    const localCartInfo = localStorage.getItem('cart');

    if (localCartInfo) {
      const parsedLocalCartInfo = JSON.parse(localCartInfo);

      setCartInfo(JSON.parse(localCartInfo));
      setImageUrl(parsedLocalCartInfo.maxresURL);
    }
  }, []);

  const placeOrder = () => {
    alert('Order Placed');
    router.push('/');
  };

  return (
    <>
      <Header back />
      <Container>
        {!mobile && <Stepper step={3} />}

        <CheckoutView>
          {!mobile && (
            <CheckoutImage>
              {imageUrl && <Image src={imageUrl} layout="fill" objectFit="cover" />}
            </CheckoutImage>
          )}

          <ConfimationDetails>
            <ConfirmationDetailsInfo>
              <CheckoutTitle>Order summary</CheckoutTitle>

              <DetailPaymentBox>
                <DescriptionBox>
                  {mobile && (
                    <MobileCheckoutImage>
                      {imageUrl && <Image src={imageUrl} layout="fill" objectFit="cover" />}
                    </MobileCheckoutImage>
                  )}
                  <div>
                    <p>{cartInfo?.description}</p>
                    <CheckoutGrayText>x 1 Green Size 41 Item #2839u512401</CheckoutGrayText>
                  </div>
                </DescriptionBox>

                <CheckoutDetailsInfo>
                  <CheckoutTitle>Payment Method</CheckoutTitle>
                  <PaymentMethodBox>
                    <Bank /> <span>Online Banking</span>
                  </PaymentMethodBox>
                </CheckoutDetailsInfo>
              </DetailPaymentBox>

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
            </ConfirmationDetailsInfo>
          </ConfimationDetails>
        </CheckoutView>
      </Container>
    </>
  );
};

export default Checkout;
