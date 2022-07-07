import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteVideogame, getVideogame, cleanDetail, resetLoading } from "../../redux/actions";
import { ContainerDetail, Details } from "./Details-styles";
import Spinner from "../Spinner/Spinner.jsx";
import Modal from "../Modal/Modal";

const VideogameDetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    
    //Estados para el modal
    const [showModal, setShowModal] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const videogame = useSelector(state => state.videogameDetail);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getVideogame(id));
    }, [dispatch, id]);

    //Cuando el componente se desmonta, limpio el estado del detalle
    useEffect(() => {
        return dispatch(cleanDetail());
    }, [dispatch])

    //Cuando el componente se desmonta, vuelvo a poner en true el loading
    useEffect(() => {
        return dispatch(resetLoading());
    }, [dispatch])

    //Funcion para eliminar un videojuego
    const handleDelete = () => {
        dispatch(deleteVideogame(id));
        setShowModal(false);
        setShowModalSuccess(true);
        
        setTimeout(() => {
            setShowModalSuccess(false);
            history.push("/home");
        }, 2000)
    }

    return (
        <ContainerDetail>
            {
                !loading ? (
                    !videogame.message ?
                        <>
                            <button type="button" className="btn-return" onClick={() => history.push("/home")}>Return</button>
                            <Details>
                                <div className="image">
                                    <img src={videogame.image} alt={videogame.name} />
                                </div>
                                <div className="content"> 
                                    <h2>{videogame.name}</h2>
                                    <p className="date">Released on {videogame.released}</p>
                                    <p className="rating"><i className="fas fa-star"></i>{videogame.rating}</p>
                                    <p className="platforms"><span>Available platforms:</span> {videogame.platforms && videogame.platforms.join(", ")}</p>
                                    <p className="genres"><span>Genres: </span>{videogame.genres?.map(g => <span className="name" key={g.id}>{g.name}</span>)}</p>
                                </div>
                                <div className="description">
                                    <p>{videogame.description}</p>
                                </div>
                            </Details>
                            {videogame.createdInDB && <button type="button" className="btn-delete" onClick={() => setShowModal(true)}>Delete</button>}
                        </> 
                    : 
                        <>
                            <h2>Videogame not found</h2>
                            <button type="button" className="btn-return" onClick={() => history.push("/home")}>Return</button>
                        </>
                ) : <><Spinner /></>
            }
            {showModal && <><Modal title="Warning" message="Are you sure you want to delete?" icon="fas fa-info" question={true} closeModal={() => setShowModal(false)} action={handleDelete} /></>}
            {showModalSuccess && <><Modal title="Success" message="Videogame removed successfully" icon="fas fa-check" /></>}
        </ContainerDetail>
    )
}

export default VideogameDetail;
