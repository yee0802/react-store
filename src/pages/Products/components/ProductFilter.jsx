import { useEffect, useState } from "react";
import api from "../../../api";

export default function ProductFilter(props) {
  const { setProducts, defaultProducts } = props;

  const [categories, setCategories] = useState([]);

  const fetchCategoryById = async (id) => {
    try {
      const res = await api.get(`/categories/${id}`);
      setProducts(res.data.category.products);
    } catch (e) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data.categories);
      } catch (e) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="filter-container">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="filter-category--btn"
          onClick={(e) => {
            const buttons = document.querySelectorAll(".filter-category--btn");
            const currentButton = e.currentTarget;
            const isSelected = currentButton.classList.contains("selected");

            if (!isSelected) {
              buttons.forEach((eachBtn) => {
                if (eachBtn !== currentButton) {
                  eachBtn.classList.remove("selected");
                }
              });

              currentButton.classList.add("selected");
              fetchCategoryById(category.id);
            } else {
              currentButton.classList.remove("selected");
              setProducts(defaultProducts);
            }
          }}
        >
          {category.name}
        </button>
      ))}
    </section>
  );
}
