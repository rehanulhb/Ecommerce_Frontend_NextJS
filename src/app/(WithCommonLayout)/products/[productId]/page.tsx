import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMImageUploader/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);
  return (
    <NMContainer>
      <ProductBanner
        title="Product Deatils"
        path="Home - Products - Product Deatils"
      />
      <ProductDetails product={product} />
    </NMContainer>
  );
};

export default ProductDetailsPage;
