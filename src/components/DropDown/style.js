import styled from "styled-components";

export const DropDownWrap = styled.div`
    display:flex;
    position: relative;
`

export const DropDownButton = styled.input`
    padding: 0.625rem;
    text-align: left;
    font-size: ${(props) => props.fontSize || `(--font-size-xs)`};
    color: var(--color-dg);
    border: ${(props) =>
        props.isOpen ?
            "0.125rem black solid;"
        :
            "0.0625rem var(--color-gr) solid;"
    }
    border-radius: ${(props) =>
        props.isOpen ?
            "0.3125rem;;"
        :
            "0.0625rem;"
    }
    width: ${(props) => props.width || `6.25rem` };
    height: ${(props) => props.height || `1.875rem` };
    line-height: ${(props) => props.lineHeight || `0`};
    cursor: pointer;
`

export const DropDownList = styled.ul`
    cursor: pointer;
    z-index: 2;
    position: absolute;
    background-color: white;
    width: ${(props) => props.listWidth || `3.75rem` };
    font-size: var(--font-size-xs);
    list-style: none;
    overflow-Y: scroll;
    height: 5.625rem;
    border-radius: 0.1875rem;
    margin-top: 0.1875rem;
    border: 0.0625rem var(--color-gr) solid;
    &::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: 0.125rem;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background-color: var(--color-dg);
    }
`

export const DropDownLi = styled.li`
    height: 1.875rem;
    line-height: 1.5625rem;
    text-align: left;
    margin-left: -2.5rem;
    padding-left: 0.5rem;
    border-bottom: 0.0625rem var(--color-gr) solid;
    &:hover{
        background-color: var(--color-gr);
        transform: translateY(0);
        transition: 0.3s;
    }
`

export const ExpandIconWrap = styled.div`
    position:absolute;
    right: 0.1875rem;
    top: 0.3125rem;;
    cursor: pointer;
`