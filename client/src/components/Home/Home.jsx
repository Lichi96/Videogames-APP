import React, { useEffect, useState } from "react";
import { getAllVideogames, getGenres, resetLoading } from "../../redux/actions";
import VideogameCard from "../VideogameCard/VideogameCard";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Filters/Filters";
import Spinner from "../Spinner/Spinner";
import { HomeStyles, ContainerCards, ContainerSpinner } from "./Home-styles";
import NavBar from "../NavBar/NavBar";

const Home = () => {

    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const loading = useSelector(state => state.loading);
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getAllVideogames());
        dispatch(getGenres());
        return dispatch(resetLoading());
    }, [dispatch])

    //Paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = (videogames.slice(indexOfFirstVideogame, indexOfLastVideogame));
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //funcion que cambia de pagina, para los botones next y prev del paginado
    const change = (e) => {
        e.target.name === "prev" ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage + 1);
    }

    return (
        <HomeStyles>
            <NavBar />
            <Filters genres={genres} setCurrentPage={setCurrentPage} />
            <ContainerCards>
            {
                !loading ? (
                    currentVideogames.length ? currentVideogames.map(videogame => (
                        <VideogameCard 
                            key={videogame.id}
                            id={videogame.id}
                            name={videogame.name}
                            released={videogame.released}
                            rating={videogame.rating}
                            platforms={videogame.platforms}
                            genres={videogame.genres}
                            image={videogame.image}
                        />
                    )) : <><h2 className="error-message">Videogames not found</h2></> 
                ) : <ContainerSpinner><Spinner /></ContainerSpinner>
            }
            </ContainerCards>
            <Pagination videogames={videogames} videogamesPerPage={videogamesPerPage} currentPage={currentPage} paginate={paginate} change={change} />
        </HomeStyles>
    )
    
}
  
export default Home;