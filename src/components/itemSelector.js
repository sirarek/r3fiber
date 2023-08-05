import useDimensionStore from "../store/store";

const ItemSelector = props=>{
    const selectFurniture = useDimensionStore(state => state.selectFurniture)
    const selectHandler = (e)=>{
    selectFurniture(e.target.value)
    }
    return(
        <select onChange={selectHandler}>
            <option value="chair">Chair</option>
            <option value="cabinet">Cabinet</option>
        </select>
    )
}
export  default ItemSelector;