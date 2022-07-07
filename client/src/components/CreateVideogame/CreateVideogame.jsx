import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getGenres, createVideogame, getAllVideogames } from '../../redux/actions';
import Modal from '../Modal/Modal';
import { Container, ContainerForm, FormStyles, FormGroup, Error, SelectedPlatforms, SelectedGenres, Submit, Required } from './Form-Styles';

const defaultImg = "https://p4.wallpaperbetter.com/wallpaper/51/182/360/video-game-game-over-minimalist-wallpaper-preview.jpg";
const platformsSelect = ["Android", "Linux", "macOS", "PC", "PlaySation 3", "PlayStation 4", "PlayStation 5", "Xbox Series S/X", "Xbox One", "Xbox 360"];

const validate = (input, videogames = null) => {
	let errors = {};

    if (input.name.length > 0) {
        if (videogames) {
            const vgName = videogames.filter(vg => vg.name.toLowerCase() === input.name.toLowerCase());
            if (vgName.length > 0) errors.name = "Name already exists";
        }

        if (!/^[a-zA-Z0-9 ]+$/.test(input.name)) {
            errors.name = "Name must only contain characteres and numbers";
        }
        else if (input.name.length < 4 || input.name.length > 48) {
            errors.name = 'Name must contain between 4 and 48 characters';
        }
    }

    if (input.description.length > 0) {
        if (input.description.length > 440) {
            errors.description = "Description must be shorter than 440 characters";
        }
    }

    if (input.rating < 1 || input.rating > 5) {
        errors.rating = "Rating must be between 1 and 5";
    }
    
    if (input.genres.length > 0) {
        if (input.genres.length > 4) {
            errors.genres = "You can not add more than 4 genres"; 
        }
    }

    if (input.platforms.length > 0) {
        if (input.platforms.length > 6) {
            errors.platforms = "You can not add more than 6 platforms";
        }
    }

	return errors;
}

const CreateVideogame = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.genres);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    
    const formatDate = () => {
        const date = new Date();
        return date.toISOString().slice(0, 10);
    }

    //Input inicial
    const [input, setInput] = useState({
        name: "",
        description: "",
        released: formatDate(),
        rating: 1,
        platforms: [],
        genres: [],
        image: ""
    });
    
    //Estado de generos para renderizar los seleccionados
    const [genresSelected, setGenresSelected] = useState([]);
    
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getAllVideogames());
    }, [dispatch])

    //Me traigo el estado videogames para hacer la validacion de nombre existente
    const videogames = useSelector(state => state.videogames);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        });
        setErrors(validate({...input, [name]: value}, videogames));
    }

    const handleSelect = (e) => {
        const genre = genres.find(g => g.id === parseInt(e.target.value)); //busco el genero para guardarlo en el estado de los generos que se van a renderizar
        if (e.target.name === "platforms") {
            if (!input.platforms.includes(e.target.value)) { //evita que se repitan las plataformas que selecciono
                //seteo input y errors pasandole el valor que me llega
                setInput({
                    ...input, [e.target.name]: [...input.platforms, e.target.value]
                });
                setErrors(validate({...input, [e.target.name]: [...input.platforms, e.target.value]}))
            } 
        }
        if (e.target.name === "genres") {
            if (!input.genres.includes(e.target.value)) {
                setGenresSelected([...genresSelected, genre]); //actualizo el estado de generos seleccionados para renderizarlos
                setInput({  
                    ...input, [e.target.name]: [...input.genres, e.target.value]
                })
                setErrors(validate({...input, [e.target.name]: [...input.genres, e.target.value]}));
            }
        }
    }

    const deleteSelected = (e) => {
        if (e.target.name === "platforms") {
            //seteo el input y los errores, filtrando por la plataforma que elimine
            setInput({...input, platforms: input.platforms.filter(p => p !== e.target.value)});
            setErrors(validate({...input, platforms: input.platforms.filter(p => p !== e.target.value)}));
        }
        if (e.target.name === "genres") {
            //seteo input, generos seleccionados y errores, filtrando por el genero que elimine
            setInput({...input, genres: input.genres.filter(g => g !== e.target.value)});
            setGenresSelected(genresSelected.filter(g => g.id !== parseInt(e.target.value)));
            setErrors(validate({...input, genres: input.genres.filter(g => g !== e.target.value)}));
        };
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input.image = input.image === "" ? defaultImg : input.image; 
        input.genres = input.genres.map(g => parseInt(g));
        input.rating = parseFloat(input.rating);
        
        if (!Object.keys(errors).length) { //si no hay ningun error, recien ahi creo el videojuego
            dispatch(createVideogame(input));
            setShowModal(true);
            
            setTimeout(() => {
                setShowModal(false);
                history.push("/home");
            }, 2000);
        }
        
    }

    return (
        <Container>
            <button className="btn" type="button" onClick={() => history.push("/home")}>Return</button>
            <ContainerForm>
                <FormStyles onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Create a videogame</legend>
                        <FormGroup>
                            <div>
                                <label htmlFor="name">Name *</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={input.name}
                                    onChange={handleChange}
                                    placeholder="Add a name..."
                                    required
                                />
                            </div>
                            {errors.name && <Error>{errors.name}</Error>}
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <label htmlFor="description">Description *</label>
                                <textarea 
                                    name="description"
                                    value={input.description}    
                                    onChange={handleChange}
                                    required
                                    placeholder="Add a description..."
                                />
                            </div>
                        {errors.description && <Error>{errors.description}</Error>}
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <label htmlFor="name">Released date</label>
                                <input 
                                    type="date" 
                                    name="released" 
                                    value={input.released}
                                    onChange={handleChange}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div> 
                                <label htmlFor="rating">Rating</label>
                                <input 
                                    type="number" 
                                    name="rating" 
                                    step="0.01" 
                                    value={input.rating}
                                    onChange={handleChange}
                                    min={1}
                                    max={5}
                                    placeholder="From 1 to 5"
                                />
                            </div>
                            {errors.rating && <Error>{errors.rating}</Error>}
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <label htmlFor="platforms">Platforms *</label>
                                <select title="Max 6 platforms" defaultValue="" required name="platforms" onChange={handleSelect}>
                                    <option value="" disabled>Select...</option>
                                    {
                                        platformsSelect.map(platform => (
                                            <option key={platform} value={platform}>{platform}</option>
                                            ))
                                        }
                                </select>
                            </div>
                            {errors.platforms && <Error>{errors.platforms}</Error>}
                        </FormGroup>
                        {
                            input.platforms.length > 0 && 
                                <SelectedPlatforms>
                                    {
                                        input.platforms.map(p => (
                                            <div key={p}>
                                                <span>{p}</span>
                                                <button className="btn-del" type="button" name="platforms" onClick={deleteSelected} value={p}>X</button>
                                            </div>
                                        ))
                                    }
                                </SelectedPlatforms>
                        }
                        <FormGroup>
                            <div>
                                <label htmlFor="genres">Genres *</label>
                                <select title="Max 4 genres" defaultValue="" required name="genres" onChange={handleSelect}>
                                    <option value="" disabled>Select...</option>
                                    {
                                        genres.length && genres.map(genre => (
                                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                                        ))  
                                    }
                                </select>
                            </div>
                            {errors.genres && <Error>{errors.genres}</Error>}
                        </FormGroup>
                        {
                            genresSelected.length > 0 && 
                                <SelectedGenres>
                                    {
                                        genresSelected.map(g => (
                                            <div key={g.id}>
                                                <span>{g.name}</span>
                                                <button className="btn-del" type="button" name="genres" onClick={deleteSelected} value={g.id}>X</button>
                                            </div>
                                        ))
                                    }
                                </SelectedGenres>
                        }
                
                        <FormGroup>
                            <div>
                                <label htmlFor="image">Image</label>
                                <input 
                                    type="text" 
                                    name="image"
                                    value={input.image}
                                    onChange={handleChange}
                                    pattern='https?://[\w-]+(.[\w-]+)+[/#?]?.*$'
                                    title="URL only like https://google.com/"
                                    placeholder="URL..."
                                />
                            </div>
                        </FormGroup>
                        
                        <Submit type="submit" disabled={Object.keys(errors).length > 0}>Create</Submit>
                        <Required>( * ) Required fields</Required>
                    </fieldset>
                </FormStyles>
            </ContainerForm>
            {showModal && <Modal title="Success" message="Videogame created successfully!" icon="fas fa-check"/>}
        </Container>
    )
}

export default CreateVideogame;