import { Box, Flex, HStack, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import HeaderTable from "../Components/header_table"
import DetailsTable from "../Components/details_table"
import ItemTable from "../Components/item_mater"

const SinglePage =()=>{
    return<>
    <Box>
    <Heading>Head_Table</Heading>
        <HeaderTable/>
        <Heading>Details_Table</Heading>
        <DetailsTable/>
        <Heading>Items_Table</Heading>
        <ItemTable/>

    </Box>
   
    </>
}
export default SinglePage