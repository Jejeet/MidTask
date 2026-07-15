// useMemo memoises a calculated value.

import { useMemo } from "react";

function ProductList({
  products,
  search,
}: {
  products: string[];
  search: string;
}) {
  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

// useMemo is useful for expensive calculations that don't need to be recalculated on every render. It only recalculates when the dependencies change.