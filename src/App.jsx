import ProductImage from "./components/ProductImage/ProductImage.jsx";
import Price from "./components/Price/Price.jsx";
import AddToCartButton from "./components/Cart/AddToCartButton.jsx";

import mobileImage from "./assets/images/image-product-mobile.jpg";
import desktopImage from "./assets/images/image-product-desktop.jpg";

const productDetail = {
  productId: "1",
  category: "Perfume",
  name: "Gabrielle essence eau de parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  regularPrice: "$169.99",
  specialPrice: "$149.99",
};

const App = () => (
  <main className="h-lvh flex items-center justify-center">
    <div className="max-w-[343px] sm:max-w-[600px] sm:flex">
      <ProductImage
        className="h-60 w-full object-cover rounded-t-xl sm:h-[450px] sm:rounded-tr-none sm:rounded-bl-xl"
        altText={productDetail.name}
        mobileImage={mobileImage}
        desktopImage={desktopImage}
      />
      <div className="bg-pure-white p-6 rounded-b-xl sm:max-w-[300px] sm:rounded-bl-none sm: rounded-tr-xl sm:p-8">
        <h1 className="mb-5 sm:mb-6 uppercase text-gray text-xs leading-[12px] tracking-5 font-overline font-medium">
          {productDetail.category}
        </h1>
        <h2 className="mb-5 sm:mb-6 capitalize text-black text-[32px] leading-[32px] tracking-[0px] font-display font-bold ">
          {productDetail.name}
        </h2>
        <p className="mb-7 text-gray text-[14px] leading-[23px] tracking-[0px] font-medium font-body">
          {productDetail.description}
        </p>
        <Price
          regularPrice={productDetail.regularPrice}
          specialPrice={productDetail.specialPrice}
        />
        <AddToCartButton
          productId={productDetail.productId}
          className="mt-5 sm:mt-8 py-3 w-full rounded-lg bg-green focus:bg-green-dark hover:bg-green-dark text-pure-white text-[14px] font-bold font-btnText"
        />
      </div>
    </div>
  </main>
);

export default App;
