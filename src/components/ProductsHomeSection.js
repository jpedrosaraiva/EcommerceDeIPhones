import products from '../data/products';
import Container from './Container';
import ProductCard from './ProductCard';
import '../css/ProductsHomeSection.css';
import { Link } from 'react-router-dom';

const ProductsHomeSection = (props) => {
  const { addToCart, cart } = props;
  
  return (
    <section className='products-section'>
      <Container>
        <h2>Mais vendidos</h2>
        <div className='products'>
          <ProductCard
            product={products[10]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[10].id}`}
          />
          <ProductCard
            product={products[3]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[3].id}`}
          />
          <ProductCard
            product={products[6]}
            addToCart={addToCart}
            cart={cart}
            hasLink={true}
            link={`products/${products[6].id}`}
          />
        </div>
        <Link to='/products'>Ver mais produtos</Link>
      </Container>
    </section>
  );
};

export default ProductsHomeSection;
