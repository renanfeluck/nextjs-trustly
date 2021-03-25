import Header from '@app/Header';
import ProductCard from '@app/ProductCard';
import SearchInput from '@app/SearchInput';
import Container from '@design/Container';
import { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import styled from 'styled-components';
import { ProductInfo } from 'types/product';

const SearchBox = styled.div`
  margin-top: 81px;
`;

const ProductBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProductItem = styled.div`
  flex: 1 0 33%;
  max-width: 33%;
  margin-top: 66px;
`;

type HomeData = {
  productsResults: ProductInfo[];
};

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeData>> {
  const products = await fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json');

  const productsResult = await products.json();

  return {
    props: {
      productsResults: productsResult?.results as ProductInfo[],
    },
  };
}

export default function Home({ productsResults }: HomeData): JSX.Element {
  const [productList, setProductList] = useState(productsResults);
  const [searchValue, setSearchValue] = useState('');

  const router = useRouter();

  const filterSearch = event => {
    const { value } = event.target;

    setSearchValue(value);

    const filtredList = productsResults.filter(
      product => product.description.toUpperCase().indexOf(value.toUpperCase()) >= 0
    );

    setProductList(filtredList);
  };

  const addToCart = (product: ProductInfo) => {
    localStorage.setItem('cart', JSON.stringify(product));

    router.push('/checkout');
  };

  return (
    <div>
      <Header />
      <Container>
        <SearchBox>
          <SearchInput value={searchValue} onChange={filterSearch} />
        </SearchBox>

        <ProductBox>
          {productList &&
            productList.map((product: ProductInfo) => (
              <ProductItem key={product.id}>
                <ProductCard product={product} onAddToCart={() => addToCart(product)} />
              </ProductItem>
            ))}
        </ProductBox>
      </Container>
    </div>
  );
}
