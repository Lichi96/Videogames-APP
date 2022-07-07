import { 
        GET_ALL_VIDEOGAMES,
        GET_VIDEOGAME,
        GET_VIDEOGAMES_BY_NAME, 
        GET_GENRES, 
        CREATE_VIDEOGAME,
        DELETE_VIDEOGAME,
        // FILTER_VIDEOGAMES_BY_GENRE,
        // FILTER_VIDEOGAMES_BY_ORIGIN,
        ORDER_VIDEOGAMES,
        FILTER_VIDEOGAMES,
        CLEAN_DETAIL,
        RESET_LOADING
} from "../actions";

const initialState = {
    videogames: [],
    allVideogames: [],
    videogameDetail: {},
    genres: [],
    loading: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:    
            return { ...state, videogames: action.payload, allVideogames: action.payload, loading: false }
      
        case GET_VIDEOGAME:
            return { ...state, videogameDetail: action.payload, loading: false }    

        case GET_VIDEOGAMES_BY_NAME: 
            return { ...state, videogames: action.payload }
       
        case GET_GENRES: 
            return { ...state, genres: action.payload }
      
        case CREATE_VIDEOGAME:
            return { ...state }
        
        case DELETE_VIDEOGAME: 
            return { ...state }

        case FILTER_VIDEOGAMES:
            let videogamesFilter = [...state.allVideogames];
            const byGenre = action.payload.byGenre;
            const byOrigin = action.payload.byOrigin;
            const byName = action.payload.byName; 
            let videogamesByGenre;

            if (byGenre) {
                if (byGenre !== "all") {
                    videogamesByGenre = videogamesFilter = videogamesFilter.filter(videogame => {
                        return videogame.genres.find(g => g.name.includes(byGenre));
                    })
                    videogamesFilter = videogamesByGenre;
                }        
                else {
                    videogamesFilter = [...state.allVideogames];
                }
            }

            if (byOrigin) {
                if (byOrigin === "db") videogamesFilter = videogamesFilter.filter(videogame => videogame.createdInDB);
                if (byOrigin === "api") videogamesFilter = videogamesFilter.filter(videogame => !videogame.createdInDB);
                if (byOrigin === "all") videogamesFilter = videogamesByGenre ? videogamesByGenre : [...state.allVideogames]; 
            }

            if (byName) {
                videogamesFilter = videogamesFilter.filter(videogame => videogame.name.toLowerCase().includes(byName.toLowerCase()))
            }

            return {
                ...state,
                videogames: videogamesFilter
            }
  
        case ORDER_VIDEOGAMES:
            const videogamesOrderAlpha = [...state.videogames]; 
            const videogamesOrderRating = [...state.videogames];
            let orderedVideogames;
            if (action.payload) {
                if (action.payload === "asc") {
                    orderedVideogames = videogamesOrderAlpha.sort((a, b) => a.name.localeCompare(b.name)); 
                }
                else if (action.payload === "desc") {
                    orderedVideogames = videogamesOrderAlpha.sort((a, b) => b.name.localeCompare(a.name));
                }
                if (action.payload === "low") {
                    orderedVideogames = videogamesOrderRating.sort((a, b) =>  {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (b.rating > a.rating) {
                            return -1;
                        }
                        return 0;
                    })
                }
                else if (action.payload === "high") {
                    orderedVideogames = videogamesOrderRating.sort((a, b) =>  {
                        if (a.rating > b.rating) {
                            return -1;
                        }
                        if (b.rating > a.rating) {
                            return 1;
                        }
                        return 0;
                    });
                }
            }
            return { ...state, videogames: orderedVideogames}

        case CLEAN_DETAIL: 
            return { ...state, videogameDetail: {} } 

        case RESET_LOADING:
            return { ...state, loading: true }
        
        default: return {...state}    
    }
}

    // case FILTER_VIDEOGAMES_BY_GENRE:
    //     const videogamesGenre = state.videogamesByOrigin.length ? [...state.videogamesByGenre] : [...state.allVideogames];
    //     const genreFilter = videogamesGenre.filter(videogame => {
    //         let genre = videogame.genres.find(g => g.name.includes(action.payload))
    //         return genre;
    //     });

    //     const videogamesFilteredByGenre = action.payload === "all" ? state.allVideogames : genreFilter;
    //     const toShow = state.videogamesByOrigin.length ? state.videogamesByOrigin : videogamesFilteredByGenre;
    //     return { ...state, videogames: toShow, videogamesByGenre: genreFilter }
    
    // case FILTER_VIDEOGAMES_BY_ORIGIN:
    //     const videogamesOrigin = state.videogamesByGenre.length ? [...state.videogamesByGenre] : [...state.allVideogames];
    //     const videogamesFilteredByOrigin = action.payload === "db" ? videogamesOrigin.filter(videogame => videogame.createdInDB) : videogamesOrigin.filter(videogame => !videogame.createdInDB);
    //     const render = state.videogamesByGenre.length ? state.videogamesByGenre : state.allVideogames;
    //     return { ...state, videogames: action.payload === "all" ? render : videogamesFilteredByOrigin } 
    

export default rootReducer;