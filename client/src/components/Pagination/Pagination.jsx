import React from 'react';
import { PaginationStyles, Button } from "./Pagination-Styles.js";

const Pagination = ({videogames, videogamesPerPage, paginate, change, currentPage }) => {

    const pages = [];
    //Obtengo la cantidad de paginas
    for (let i = 1; i <= Math.ceil(videogames.length / videogamesPerPage); i++) {
        pages.push(i);
    }

    //Funcion para renderizar los botones next y prev
    const renderButton = (text, type) => {
        if (videogames.length) {
            if (type === "prev") return <Button name="prev" disabled={currentPage === 1} onClick={change}>{text}</Button>
            else return <Button name="next" disabled={currentPage > pages.length - 1} onClick={change}>{text}</Button>                
        }
    }

    return (
        pages.length > 1 && 
            <PaginationStyles>
                {renderButton("< Prev", "prev")}   
                {pages?.map(number => (
                    <Button key={number} className={currentPage === number ? "selected" : null} onClick={() => paginate(number)}>{number}</Button>
                ))}
                {renderButton("Next >", "next")}
            </PaginationStyles>
    )

}

export default Pagination;