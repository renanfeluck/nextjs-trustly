import styled from 'styled-components';

const Line = styled.div`
  border-bottom: 1px solid #e8e8e8;
  width: 860px;
  height: 1px;
  position: relative;
  display: none;
  justify-content: space-between;
  margin: 67px auto 0;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const Step = styled.div<{ active?: boolean }>`
  background: ${props => (props.active ? '#61cb46' : '#E8E8E8')};
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -6px;
  position: relative;
`;

const StepperText = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const StepBox = styled.div<{ transform?: string }>`
  display: flex;
  justifycontent: center;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  transform: translateX(${props => props.transform});
`;

type StepperPros = {
  step: number;
};

const Stepper = ({ step }: StepperPros): JSX.Element => {
  return (
    <Line>
      <StepBox transform="-50%">
        <Step active />
        <StepperText>Cart</StepperText>
      </StepBox>

      <StepBox>
        <Step active={step >= 2} />
        <StepperText>Payment options</StepperText>
      </StepBox>

      <StepBox transform="50%">
        <Step active={step >= 3} />
        <StepperText>Recipt</StepperText>
      </StepBox>
    </Line>
  );
};

export default Stepper;
