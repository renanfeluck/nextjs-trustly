import styled from 'styled-components';
import { ProductInfo } from 'types/product';
import Image from 'next/image';
import Select from '@design/Select';
import Label from '@design/Label';
import Button from '@design/Button';

const CardBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  height: 373px;
  width: 297px;
  margin: auto;
`;

const ProductTitle = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const ProductPrice = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

type ProductData = {
  product: ProductInfo;
  onAddToCart: any;
};

const ProductCard = ({ product, onAddToCart }: ProductData): JSX.Element => {
  return (
    <CardBox>
      <Image src={product.thumbnailURL} alt="" width="297px" height="171px" />
      <ProductTitle> {product.description} </ProductTitle>
      <SelectBox>
        <div>
          <Label> Size </Label>
          <Select id="size" name="size">
            <option> 40 </option>
            <option> 41 </option>
            <option> 42 </option>
          </Select>
        </div>

        <div>
          <Label> Quantity </Label>
          <Select id="quantity" name="quantity">
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
          </Select>
        </div>
      </SelectBox>
      <ProductPrice> $ {product.price} </ProductPrice>
      <ButtonBox>
        <Button onClick={onAddToCart}> Add to cart </Button>
      </ButtonBox>
    </CardBox>
  );
};

export default ProductCard;
