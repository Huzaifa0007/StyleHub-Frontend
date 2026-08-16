import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  useGetProductQuery,
  useGetProductsQuery,
} from "../features/products/productApi";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import ProductGallery from "../features/products/ProductGallery";
import ProductInfo from "../features/products/ProductInfo";
import RelatedProducts from "../features/products/RelatedProducts";

function Product() {
  const { slug } = useParams();

  const { data, isLoading } = useGetProductQuery(slug);

  const { data: allProducts } = useGetProductsQuery();

  const product = data?.data;

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return (
      allProducts?.data?.products
        ?.filter(
          (item) =>
            item.category === product.category && item._id !== product._id,
        )
        ?.slice(0, 4) || []
    );
  }, [allProducts, product]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return <Empty title="Product Not Found" />;
  }

  return (
    <Container className="py-8 sm:py-10 lg:py-14">
      {/* Main Product */}
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
        <ProductGallery images={product.images} />

        <ProductInfo product={product} />
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </Container>
  );
}

export default Product;
