import styles from "./FoodItems.module.css";

import "./Items";
import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group ">
      {items.map((item) => (
        <Items key={item} fooditem={item}></Items>
       
      ))}
    </ul>
  );
};
export default FoodItems;
