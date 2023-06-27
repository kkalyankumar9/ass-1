import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../Redux/DetailsReducer/action";

const ItemTable = () => {
  const handlePrint = () => {
    window.print();
  };
const itemData=useSelector((store)=>store.DetailsReducer.itemData)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getItems())
})
console.log(itemData)
  return (
    <div>
      <h1>Printable Item List</h1>
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {itemData?.map((item, index) => (
            <tr key={index}>
              <td>{item.item_code}</td>
              <td>{item.item_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button onClick={handlePrint}>Print</Button>
    </div>
  );
};

export default ItemTable;
