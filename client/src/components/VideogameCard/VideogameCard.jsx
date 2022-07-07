import React from 'react';
import { useHistory } from "react-router-dom";
import { CardStyles } from './Card-styles';

const VideogameCard = ({ id, name, released, rating, platforms, genres, image }) => {

	const history = useHistory();

	const handleClick = () => {
		history.push(`/detail/${id}`);
	}

  	return (
		<CardStyles onClick={handleClick}>
				<div className='image'>
					<img src={image} alt={name} />
				</div>
				<div className='data'>
					<h2>{name}</h2>
					<p className="date">{released}</p>
					<p className="rating"><i className="fas fa-star"></i> {rating}</p>
					<p className="platforms">
						{platforms?.filter(p => p.includes("PlayStation")).length ? <span><i className="fab fa-playstation"></i></span> : null}
						{platforms?.filter(p => p.includes("Xbox")).length ? <span><i className="fab fa-xbox"></i></span> : null}
						{platforms?.filter(p => p.includes("PC")).length ? <span><i className="fas fa-desktop"></i></span> : null}
						{platforms?.filter(p => p.includes("Linux")).length ? <span><i className="fab fa-linux"></i></span> : null}
						{platforms?.filter(p => p.includes("macOS")).length ? <span><i className="fab fa-apple"></i></span> : null}
						{platforms?.filter(p => p.includes("Android")).length ? <span><i className="fab fa-android"></i></span> : null}
					</p>
					<p className="genres">{genres?.map(g => g.name).join(" | ")}</p>
				</div>
		</CardStyles>
  	);
};

export default VideogameCard;