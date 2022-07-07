import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME"
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
// export const FILTER_VIDEOGAMES_BY_GENRE = "FILTER_VIDEOGAMES_BY_GENRE";
// export const FILTER_VIDEOGAMES_BY_SOURCE = "FILTER_VIDEOGAMES_BY_SOURCE";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const RESET_LOADING = "RESET_LOADING";

export const getAllVideogames = () => {
	return async function (dispatch) {
		const videogames = await axios.get("http://localhost:3001/videogames");
		return dispatch({ type: GET_ALL_VIDEOGAMES, payload: videogames.data });
	};
}

export const getVideogame = (id) => {
	return async function (dispatch) {
		try {
			const videogame = await axios.get(`http://localhost:3001/videogames/${id}`);
			return dispatch({ type: GET_VIDEOGAME, payload: videogame.data })
		}
		catch (error) {
			return dispatch({ type: GET_VIDEOGAME, payload: error });
		}
	}
}

export const getVideogamesByName = (name) => {
	return async function (dispatch) {
		const videogames = await axios.get(`http://localhost:3001/videogames?name=${name}`)
		return dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: videogames.data });
	}
}

export const getGenres = () => {
	return async function (dispatch) {
		const genres = await axios.get("http://localhost:3001/genres");
		return dispatch({ type: GET_GENRES, payload: genres.data });
	}
}

export const createVideogame = (videogame) => {
	return async function (dispatch) {
		try {
			const newVideogame = await axios.post("http://localhost:3001/videogames", videogame)
            return dispatch({ type: CREATE_VIDEOGAME, payload: newVideogame.data });
		}
        catch (e) {
            console.log(e);
        }
	}
}

export const deleteVideogame = (id) => {
	return async function (dispatch) {
		try {
			const deletedVideogame = await axios.delete(`http://localhost:3001/videogames/${id}`)
			return dispatch({ type: DELETE_VIDEOGAME, payload: deletedVideogame });
		}
		catch (e) {
			console.log(e);
		}
	}
}

export const filterVideogames = (byGenre, byOrigin, byName) => {
	return {
		type: FILTER_VIDEOGAMES, payload: { byGenre, byOrigin, byName }
	}
}


export const orderVideogames = (sort) => {
	return {
		type: ORDER_VIDEOGAMES, payload: sort
	}
}

export const cleanDetail = () => {
	return {
		type: CLEAN_DETAIL
	}
}

export const resetLoading = () => {
	return {
		type: RESET_LOADING
	}
}


// export const filterVideogamesByGenre = (filter) => {
//     return {
//         type: FILTER_VIDEOGAMES_BY_GENRE, payload: filter, 
//     }
// }
		
// export const filterVideogamesByOrigin = (filter) => {
// 	return {
// 		type: FILTER_VIDEOGAMES_BY_ORIGIN, payload: filter
// 	}
// }
