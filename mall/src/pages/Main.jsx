import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

export default function Main() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, [])

  return (
    <>
      <ProductList/>
    </>
  );
}
