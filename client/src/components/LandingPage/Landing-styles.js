import styled from 'styled-components';
import img from "../../assets/landing.jpg";

export const Landing = styled.div`
	height: 100vh;
	display: flex;
    flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	background-image: url(${img});
	background-size: cover;
	/* position: relative; */

    h1 {
		margin-top: 180px;
        color: #fff;
        margin-bottom: 100px;
        font-size: 82px;

		span {
			color: #36bcf5;
			font-style: italic;
		}
    }

	h4 {
		color: #fff;
		font-size: 28px;
		margin-top: -10px;
		font-style: italic;
		opacity: 0.8;
	}
`;

export const Button = styled.button`
	margin-top: 40px;
	width: 300px;
	height: 60px;
	background-color: #36bcf5;
	color: #fff;
	border-radius: 30px;
	font-size: 26px;

	&:hover {
		cursor: pointer;
		background-color: #1f9cb5;
	}
`;