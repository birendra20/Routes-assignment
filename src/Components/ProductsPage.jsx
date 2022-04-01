import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    axios.get("https://reqres.in/api/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px"
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {users.products.map((el) => {
        return (
          <div
            key={el.id}
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 40%)",
              justifyContent: "space-evenly",
              width: "200px",
              margin: "auto",
              paddingTop: "20px"
            }}
          >
            <div className="name">{el.name}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      })}
    </>
  );
};
export default ProductsPage;
