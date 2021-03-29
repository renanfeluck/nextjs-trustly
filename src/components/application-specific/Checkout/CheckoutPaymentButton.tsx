import styled from 'styled-components';

const CheckboxLabel = styled.label`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: #535353;

  display: flex;
  justify-content: space-between;
  flex: 1;

  &:checked {
    border: 1px solid red;
  }

  [type='radio'] {
    display: none;
  }
`;

const PaymentButtonBox = styled.div<{ checked?: boolean }>`
  background: #ffffff;
  border: ${props => (props.checked ? '1px solid #5dac50' : '')};
  border-radius: 10.8766px;
  width: calc(100% - 48px);
  padding: 24px;
  margin-bottom: 15px;
`;

type CheckoutPaymentButtonProps = {
  children: JSX.Element;
  checked: boolean;
};

const CheckoutPaymentButton = ({ children, checked }: CheckoutPaymentButtonProps): JSX.Element => {
  return (
    <PaymentButtonBox checked={checked}>
      <CheckboxLabel>{children}</CheckboxLabel>
    </PaymentButtonBox>
  );
};

export default CheckoutPaymentButton;
