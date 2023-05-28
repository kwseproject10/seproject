export const Size = (Size) => {
    if(Size === 'small'){
        return `@media (max-width: ${breakpoints[Size]})`;
    }else if(Size === 'medium'){
        return `@media (min-width: ${breakpoints['small']}) and (max-width: ${breakpoints[Size]})`
    }else if(Size === 'large'){
        return `@media (min-width: ${breakpoints['medium']})`;
    }
}

const breakpoints = {
    small: "576px",
    medium: "821px",
    large: "112.5rem",
};

export default Size;