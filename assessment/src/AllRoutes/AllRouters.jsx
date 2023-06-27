import { Route, Router,Routes } from "react-router-dom"
import HeaderTable from "../Components/header_table"
import DetailsTable from "../Components/details_table"
import ItemTable from "../Components/item_mater"

const AllRouters=()=>{
    return <Routes>
        <Route path="/" element={<HeaderTable/>}/>
        <Route path="/details" element={<DetailsTable/>}/>
        <Route path="/items" element={<ItemTable/>}/>
    </Routes>
}
export default AllRouters