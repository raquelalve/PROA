const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <p>{name}</p>
    <p id="preço">{price}</p>
  </div>
);

const ProductGallery = ({ products }) => (
  <section id="section2">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </section>
);

export default ProductGallery;