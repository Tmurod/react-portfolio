import axios from "axios";
import { useEffect, useState } from "react";
import CardShop from "./cards";
import Btns from "./btns";

const { PRODUCTS_API: url } = process.env;

const Pricing = () => {
  const [data, setData] = useState([]);
  const [jewelery, setJewelery] = useState();

  const getApi = async () => {
    await axios.get(`https://fakestoreapi.com/products`)
      .then(api => {
        setData(api.data);
      })
  }

  const getJewelery = async () => {
    await axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(res => {
        setJewelery(res);
      });
  }

  useEffect(() => {
    getApi();
    getJewelery();
  }, []);

  return (
    <div className="container text-center">
      <h1>category</h1>
      <div className="d-flex gap-2 justify-content-center">
        <Btns val={"all products"} />
        <Btns val={"women's clothing"} />
        <Btns val={"electronics"} />
        <Btns val={"jewelery"} />
        <Btns val={"men's clothing"} />
      </div>
      {
        data.map(val => {
          return (
            <CardShop val={val} key={val.id} />
          )
        })
      }
    </div>
  );
}

export default Pricing;