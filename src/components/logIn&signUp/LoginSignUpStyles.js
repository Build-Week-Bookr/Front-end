import styled from 'styled-components';
import image from '../../images/books.jpg';

export const ContainerStyled = styled.div`
	 /* background-color: rgb(223, 223, 223); */
	 background-image: url(${image});
	 top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
	 /* height: 100vh; */
	`

export const SignUpStyled = styled.div` 
	width: 700px;
	max-width: 100%;
	margin: 0 auto;
	margin-top: 15%;
	margin-bottom: 15%;
	padding-top: 30px;
	padding-bottom: 30px;
	background-color: white;

	h4, p {
		margin-top: 20px;
		text-align: center
	}

	h4{
		color: #23374d;
	}

	.name-field {
		margin-top: 20px;
		margin-bottom: 10px;
		width: 50%;
		height: 40px;
		border-radius: 3px;
		border-width: 0.5px;
		text-align: center;
	}

	button {
		padding: 10px;
		width: 20%;
		border-radius: 5px;
		background-color: #23374d;
		color: white;
		margin-top: 20px;
		border-width: 0.5px;
	}
`