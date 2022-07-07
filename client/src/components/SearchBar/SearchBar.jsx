import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterVideogames } from "../../redux/actions";
import { SearchbarStyles, Button } from "./Searchbar-styles";

const SearchBar = ({byGenre, byOrigin}) => {
    const dispatch = useDispatch();
    
    //Estado inicial de la busqueda
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        dispatch(filterVideogames(byGenre, byOrigin, e.target.value));
    }

    const handleSubmitClick = (e) => {
        dispatch(filterVideogames(byGenre, byOrigin, name));
        setName("");
    }

    return (
        <SearchbarStyles>
            <input 
                type="text"
                placeholder="Search by name..."  
                value={name}
                onChange={handleChange}
            />
            <Button 
                type="button"
                onClick={handleSubmitClick}
            >
                <span className="icon"><i className="fas fa-search"></i></span>
            </Button>
        </SearchbarStyles>
    )
}
  
export default SearchBar;