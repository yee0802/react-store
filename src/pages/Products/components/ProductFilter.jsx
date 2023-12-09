export default function ProductFilter(props) {
  const { products, setProducts, defaultProducts } = props;

  const filter = () => {
    const sortBy = document.getElementById("sort-by");
    const option = sortBy.value;

    const sortByHighLow = [...products]
      .sort((a, b) => a.price - b.price)
      .reverse();

    const sortByLowHigh = [...products].sort((a, b) => a.price - b.price);

    switch (option) {
      case "high-low":
        setProducts(sortByHighLow);
        break;
      case "low-high":
        setProducts(sortByLowHigh);
        break;
      case "default":
        setProducts(defaultProducts);
        break;
      default:
        break;
    }
  };

  return (
    <section className="filter--container" onChange={() => filter()}>
      <select name="filter" id="sort-by">
        <option value="default" hidden defaultValue>
          Sort By
        </option>
        <option value="default">Default</option>
        <option value="high-low">Price: High-Low</option>
        <option value="low-high">Price: Low-High</option>
      </select>
    </section>
  );
}
