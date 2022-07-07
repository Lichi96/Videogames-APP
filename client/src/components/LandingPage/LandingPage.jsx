import React from 'react';
import { useHistory } from 'react-router-dom';
import { Landing, Button } from "./Landing-styles.js";

const LandingPage = () => {

	const history = useHistory();

    return (
		<Landing>
			<h1>Welcome to web of <span>Hero Games!</span></h1>
			<h4>Here you can see all information about videogames</h4>
			<Button onClick={() => history.push("/home")}>Get started</Button>
		</Landing>
	);
};

export default LandingPage;