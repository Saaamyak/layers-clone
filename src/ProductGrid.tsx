import ProductCard from './ProductCard'; 


const products = [
  // Sample Product Data
  { name: 'Product 1', price: 19.99, imageUrl: 'path/to/image1.jpg' },
  // ... more products
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.name} // Or a unique ID if you have one
          name={product.name} 
          price={product.price} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </div>
  );
}
export default ProductGrid;
