import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { filterVideogamesByGenre, filterVideogamesBySource, orderVideogames } from '../../redux/actions';
import { filterVideogames, orderVideogames } from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import { ContainerFilters, OrderBy, FilterBy, ClearFilters } from './Filter-styles';

const Filters = ({genres, setCurrentPage}) => {
    const dispatch = useDispatch();

    //Estados iniciales para los filtrados y ordenamientos
    const [byOrigin, setByOrigin] = useState("");
    const [byGenre, setByGenre] = useState("");
    const [orderAlpha, setOrderAlpha] = useState("");
    const [orderRating, setOrderRating] = useState("");

    const handleOrder = (e) => {
        dispatch(orderVideogames(e.target.value));
        if (e.target.name === "alphabetic") setOrderAlpha(e.target.value);
        else setOrderRating(e.target.value);
    }

    const handleFilterByGenres = (e) => {
        setByGenre(e.target.value);
        setCurrentPage(1);
        // dispatch(filterVideogamesByGenre(e.target.value));
        dispatch(filterVideogames(e.target.value, byOrigin, null));   
    }

    const handleFilterByOrigin = (e) => {
        setByOrigin(e.target.value);
        setCurrentPage(1);
        // dispatch(filterVideogamesBySource(e.target.value));
        dispatch(filterVideogames(byGenre, e.target.value, null));
    }

    //Limpio los filtros y ordenamientos, los select vuelven a su valor inicial
    const clearFilters = () => {
        setByGenre("");
        setByOrigin("");
        setOrderAlpha("");
        setOrderRating("");
        dispatch(filterVideogames("", "", ""));
    }

    return (
        <ContainerFilters>
            <OrderBy>
                <h4>Order By</h4>
                <select name="alphabetic" value={orderAlpha} onChange={handleOrder}>
                    <option disabled value="">Alphabetic</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select name="rating" value={orderRating} onChange={handleOrder}>
                    <option disabled value="">Rating</option>
                    <option value="low">Lowest Rating</option>  
                    <option value="high">Highest Rating</option>
                </select>
            </OrderBy>
            <ClearFilters onClick={clearFilters}>Clear filters</ClearFilters>
            <SearchBar byGenre={byGenre} byOrigin={byOrigin} />
            <FilterBy>
                <h4>Filter By</h4>
                <select name="data-source" value={byOrigin} onChange={handleFilterByOrigin}>
                    <option disabled value="">Origin</option>
                    <option value="all">All</option>
                    <option value="db">Created</option>
                    <option value="api">Existing</option>
                </select>
                <select name="genres" value={byGenre} onChange={handleFilterByGenres}>
                    <option disabled value="">Genres</option>
                    <option value="all">All</option>
                    {
                        genres && genres.map(g => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
            </FilterBy>
        </ContainerFilters>
    )
}

export default Filters;