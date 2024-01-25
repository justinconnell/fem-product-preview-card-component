import cartIcon from '../../assets/images/icon-cart.svg'

function AddToCart(productId, quantity = 1) {
  //logic to add product to cart api goes here
  console.log(`Added ${quantity} of ${productId} to the cart.`)
}

export default function AddToCartButton({ productId, className }){
  const buttonClick = () => {
    AddToCart(productId);
  }
  return(
    <button onClick={buttonClick}
      className={`flex items-center justify-center ${className}`}>
      <img className="mr-2" src={cartIcon + ""} alt=""/> Add to Cart
    </button>
  );
}