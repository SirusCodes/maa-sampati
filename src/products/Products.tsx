import React, { FunctionComponent } from "react";
import Card from "../components/Card";
import { FilterList } from "@material-ui/icons";
import "./products.css";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  return (
    <>
      <div className="focus-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          alt=""
        />
        <h1>COMPOSITE MARBLE</h1>
      </div>
      <div className="transition-shade"></div>

      <button className="outlined-button">
        <FilterList /> Filter
      </button>

      <section className="gridview">
        {[...Array(10)].map((_, i) => (
          <Card title={`COMPOSITE ${i}`} img="imported-granite.jpg" />
        ))}
      </section>
    </>
  );
};

export default Products;
