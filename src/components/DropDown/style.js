import styled from "styled-components";

export const DropDownButton = styled.input`
    padding: 10px;
    text-align: left;
    font-size: ${(props) => props.fontSize || `12px`};
    color: rgba(150,150,150,1);
    border: ${(props) =>
        props.isOpen ?
            "2px black solid;"
        :
            "1px rgba(180,180,180,1) solid;"
    }
    border-radius: ${(props) =>
        props.isOpen ?
            "5px;"
        :
            "1px;"
    }
    width: ${(props) => props.width || `100px` };
    height: ${(props) => props.height || `30px` };
    line-height: ${(props) => props.lineHeight || `0px`};
    cursor: pointer;
`

export const DropDownList = styled.ul`
    cursor: pointer;
    z-index: 2;
    position: absolute;
    background-color: white;
    width: ${(props) => props.listWidth || `60px` };
    font-size: 12px;
    list-style: none;
    overflow-Y: scroll;
    height: 90px;
    border-radius: 3px;
    margin-top: 3px;
    border: 1px rgba(180,180,180,1) solid;
    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: rgba(100,100,100,1);
    }
`

export const DropDownLi = styled.li`
    height: 30px;
    line-height: 25px;
    text-align: left;
    margin-left: -40px;
    padding-left: 8px;
    border-bottom: 1px rgba(180,180,180,1) solid;
    &:hover{
        background-color: rgba(180,180,180,1);
    }
`