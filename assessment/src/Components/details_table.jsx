import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails, getHeader, postDetails } from "../Redux/DetailsReducer/action";

import { Table, Thead, Tbody, Tr, Th, Td, HStack, Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
const DetailsTable = () => {
  const { detailsData } = useSelector((store) => store.DetailsReducer);
  console.log(detailsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails());
  }, []);

  const [formData, setFormData] = useState({
    vr_no: "",
    sr_no: "",
    item_code: "",
    item_name: "",
    description: "",
    qty: "",
    rate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit=(e)=>{
e.preventDefault()
let data = {
    vr_no: formData.vr_no,
    sr_no: formData.sr_no,
    item_code: formData.item_code,
    item_name: formData.item_name,
    description: formData.description,
    qty: formData.qty,
    rate: formData.rate,
  };
  dispatch(postDetails(data)).then(()=>dispatch(getDetails()));
 
  setFormData({
    vr_no: "",
    sr_no: "",
    item_code: "",
    item_name: "",
    description: "",
    qty: "",
    rate: "",
  });
}

  const handleRemove = (index) => {
    console.log(index);
    dispatch(deleteDetails(index));
  };

  return (
    <>
     <HStack>
      <Box>
  <Table>
    <Thead>
      <Tr>
        <Th>Vr_no</Th>
        <Th>Sr_no</Th>
        <Th>Item_code</Th>
        <Th>Item_name</Th>
        <Th>Description</Th>
        <Th>Quantity</Th>
        <Th>Rate</Th>
      </Tr>
    </Thead>
    <Tbody>
      {detailsData?.map((item, index) => (
        <Tr key={index}>
          <Td>{item.vr_no}</Td>
          <Td>{item.sr_no}</Td>
          <Td>{item.item_code}</Td>
          <Td>{item.item_name}</Td>
          <Td>{item.description}</Td>
          <Td>{item.qty}</Td>
          <Td>{item.rate}</Td>
          <Td>
            <Button onClick={() => handleRemove(index)}>Remove</Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
  </Box>
  <Box marginTop={"0px"}>
  <form onSubmit={handleSubmit}>
    <FormControl>
      <FormLabel htmlFor="vr_no">Vr_no:</FormLabel>
      <Input
        type="number"
        id="vr_no"
        name="vr_no"
        value={formData.vr_no}
        onChange={handleChange}
        placeholder="Enter Vr_no"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="sr_no">Sr_no:</FormLabel>
      <Input
        type="number"
        id="sr_no"
        name="sr_no"
        value={formData.sr_no}
        onChange={handleChange}
        placeholder="Enter Sr_no"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="item_code">Item_code:</FormLabel>
      <Input
        type="text"
        id="item_code"
        name="item_code"
        value={formData.item_code}
        onChange={handleChange}
        placeholder="Enter Item_code"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="item_name">Item_name:</FormLabel>
      <Input
        type="text"
        id="item_name"
        name="item_name"
        value={formData.item_name}
        onChange={handleChange}
        placeholder="Enter Item_name"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="description">Description:</FormLabel>
      <Input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter Description"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="qty">Quantity:</FormLabel>
      <Input
        type="number"
        id="qty"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
        placeholder="Enter Quantity"
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="rate">Rate:</FormLabel>
      <Input
        type="number"
        id="rate"
        name="rate"
        value={formData.rate}
        onChange={handleChange}
        placeholder="Enter Rate"
      />
    </FormControl>

    <Button type="submit">Submit</Button>
  </form>
  </Box>
</HStack>
    </>
  );
};

export default DetailsTable;
