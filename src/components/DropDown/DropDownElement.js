import { DropDownLi } from "./style";

export const DropDownElement = (
    { value, setState, setIsOpen }
) => {
    const ValueClick = () => {
        setState(value);
        setIsOpen(false);
    }
    return(
        <DropDownLi onClick={ValueClick}>{value}</DropDownLi>
    )
}