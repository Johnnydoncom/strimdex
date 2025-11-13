import ProductCard from '../ProductCard'

export default function ProductCardExample() {
  return (
    <ProductCard 
      id="1"
      name="Netflix Premium 1 Month"
      description="Stream unlimited movies and TV shows in Ultra HD"
      price={5000}
      cashbackPercent={5}
      category="Streaming"
    />
  )
}
