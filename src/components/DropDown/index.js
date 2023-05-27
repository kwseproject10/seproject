import { useEffect, useRef } from "react";
import { DropDownElement } from "./DropDownElement";
import { DropDownButton, DropDownList } from "./style";

const DropDown = ({ state, setState, isOpen, setIsOpen, list, width, listWidth, height }) => {
    const outsideRef = useRef(null);
    useEffect(()=> {
        function handleClickOutside(e){
            if(outsideRef.current && !outsideRef.current.contains(e.target)){
                    setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [outsideRef, setIsOpen]);
    return(
        <div ref={outsideRef}>
        <DropDownButton
            type='button'
            isOpen={isOpen}
            width={width}
            height={height}
            onClick={()=>{setIsOpen((prev)=>!prev)}}
            value={state}
        />
            {
                isOpen ?
                    <DropDownList
                    listWidth={listWidth}>
                        {list.map((value, index) => {
                            return (
                                <DropDownElement
                                key={index}
                                value={value}
                                setIsOpen={setIsOpen}
                                setState={setState}
                                />
                        )})}
                    </DropDownList>
                :
                    ""
            }
        </div>
    )
}

export default DropDown;