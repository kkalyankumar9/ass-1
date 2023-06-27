import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHead, getHead, postHeader } from "../Redux/HeadReducer/action";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
  import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
const HeaderTable = () => {
  const [formData, setFormData] = useState({
    vr_no: "",
    vr_date: "",
    ac_name: "",
    ac_amt: "",
    status: "",
  });
  const dispatch = useDispatch();
  const { headData } = useSelector((state) => state.HeadReducer);
  console.log(headData)

  useEffect(() => {
    dispatch(getHead());
  }, [dispatch]);

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      vr_no: formData.vr_no,
      vr_date: formData.vr_date,
      ac_name: formData.ac_name,
      ac_amt: formData.ac_amt,
      status: formData.status,
    };

    dispatch(postHeader(postData)).then(() => dispatch(getHead()));

    setFormData({
      vr_no: "",
      vr_date: "",
      ac_name: "",
      ac_amt: "",
      status: "",
    });
  };

  const handleRemove = (vr_no) => {
    dispatch(deleteHead(vr_no));
  };

  return (
  
  // ...
  
  <HStack>
    <Box>
    <Table>
      <Thead>
        <Tr>
          <Th>vr_no</Th>
          <Th>vr_date</Th>
          <Th>ac_name</Th>
          <Th>ac_amt</Th>
          <Th>status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {headData.map((item) => (
          <Tr key={item.vr_no}>
            <Td>{item.vr_no}</Td>
            <Td>{item.vr_date}</Td>
            <Td>{item.ac_name}</Td>
            <Td>{item.ac_amt}</Td>
            <Td>{item.status}</Td>
            <Td>
              <Button onClick={() => handleRemove(item.vr_no)}>Remove</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Box>
    <Box>
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
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="vr_date">Vr_date:</FormLabel>
        <Input
          type="datetime-local"
          id="vr_date"
          name="vr_date"
          value={formData.vr_date}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="ac_name">Ac_name:</FormLabel>
        <Input
          type="text"
          id="ac_name"
          name="ac_name"
          value={formData.ac_name}
          onChange={handleChange}
          placeholder="Enter Ac_name"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="ac_amt">Ac_amt:</FormLabel>
        <Input
          type="number"
          id="ac_amt"
          name="ac_amt"
          value={formData.ac_amt}
          onChange={handleChange}
          placeholder="Enter Ac_amt"
          step="0.01"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="status">Status:</FormLabel>
        <Select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="A">Active</option>
          <option value="I">Inactive</option>
        </Select>
      </FormControl>
  
      <Button type="submit">Submit</Button>
    </form>
    </Box>
  </HStack>)
}
export default HeaderTable
  
    
         
