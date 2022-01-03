import styled from "styled-components"; 

export const Card = styled.div` 
  background: white;
	color: #F0EDEE;
	font-family: 'Montserrat';

	cursor: pointer;

	position: relative;
	width: auto;
	height: 400px;
	padding: 16px 16px;
	border-radius: 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

	&::before {
		content: '';
		width: 0;
		height: 0;

		border-radius: 16px;
		position: absolute;
		bottom: 0;
		right: 0;

		transition: all 0.25s ease-in-out;
	}

	&:hover:before {
		background-color: whitesmoke;
		width: 100%;
		height: 100%;
	}

`
export const ProductTitle = styled.span` 
	font-family: 'Montserrat';
	color: #000;
  font-size: 18px;
  font-weight: 600;

	z-index: 2;
`
export const ProductPrice = styled.span` 
	font-family: 'Montserrat';
	color: #000;
  font-size: 16px;
  font-weight: 400;

	z-index: 2;
`
export const BuyButton = styled.div`
	width: 75%;
	max-width: 175px;
	padding: 6px 12px;
	border-radius: 8px;
	background-color: #13131A;
	color: #F6F6F6;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	font-size: 16px;
	font-weight: 600;
	white-space: nowrap;
	outline: none;
	border: none;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.5s ease-in-out;

	z-index: 2;

	&:hover {
		color: #13131A;
		background: #F6F6F6;
		border: 1px solid #13131A;
	}
`
