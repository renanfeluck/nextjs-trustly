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
import CheckoutImage, { MobileCheckoutImage } from '@app/Checkout/CheckoutImage';
import CheckoutDetails from '@app/Checkout/CheckoutDetais';
import CheckoutDetailsInfo from '@app/Checkout/CheckoutDetaisInfo';
import CheckoutView from '@app/Checkout/CheckoutView';
import CheckoutTitle from '@app/Checkout/CheckoutTitle';
import CheckoutGrayText from '@app/Checkout/CheckoutGrayText';
import CheckoutPriceText from '@app/Checkout/CheckoutPriceText';
import isMobile from '@helpers/isMobile';

const PaymentBox = styled.div`
  width: 100%;
`;
const Checkout = (): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [cartInfo, setCartInfo] = useState<ProductInfo>();
  const [imageUrl, setImageUrl] = useState();
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(isMobile());

    const localCartInfo = localStorage.getItem('cart');

    if (localCartInfo) {
      const parsedLocalCartInfo = JSON.parse(localCartInfo);

      console.log(parsedLocalCartInfo);
      setCartInfo(JSON.parse(localCartInfo));
      setImageUrl(parsedLocalCartInfo.maxresURL);
    }
  }, []);

  const pay = e => {
    e.preventDefault();
    loadPayWithMyBank();
  };

  const DeliveryDetails = () => (
    <>
      <CheckoutTitle>Delivery details</CheckoutTitle>

      <CheckoutGrayText>
        John Smith Phone no: 01312428200 Address: Redwood City, 2000.
      </CheckoutGrayText>
    </>
  );

  return (
    <>
      <Header back />
      <Container>
        {!mobile && <Stepper step={2} />}
        <CheckoutView>
          {!mobile && (
            <CheckoutImage>
              {imageUrl && <Image src={imageUrl} layout="fill" objectFit="cover" />}
            </CheckoutImage>
          )}
          <CheckoutDetails>
            {mobile && (
              <div>
                <MobileCheckoutImage>
                  {imageUrl && <Image src={imageUrl} layout="fill" objectFit="cover" />}
                </MobileCheckoutImage>
              </div>
            )}
            <CheckoutDetailsInfo>
              {!mobile && <CheckoutTitle>Cart total</CheckoutTitle>}
              <p>{cartInfo?.description}</p>
              <CheckoutGrayText>x 1 Green Size 41 Item #2839u512401</CheckoutGrayText>

              {mobile && <DeliveryDetails />}
            </CheckoutDetailsInfo>

            <CheckoutDetailsInfo>
              {!mobile && <DeliveryDetails />}
              <CheckoutDetails>
                <div>
                  <p>Total cost</p>
                  <CheckoutGrayText>Delivery included</CheckoutGrayText>
                </div>

                <CheckoutPriceText>$100</CheckoutPriceText>
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
