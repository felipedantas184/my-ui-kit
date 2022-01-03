import styled from "styled-components"; 

export const Container = styled.section` 
  background: whitesmoke;
	color: #000;
	font-family: 'Montserrat';
  margin-top: ${top => top ? '-60px' : '0'};
`
export const GridWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
}
`
export const HalfWrapper = styled.div`
	flex: 1;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
`
export const ImageWrapper = styled.div`
  position: relative;

	width: 250px;
  height: 300px;
`;
export const TextWrapper = styled.div`
  width: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 48px;
`
export const Topline  = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  font-family: 'Montserrat';
  color: #D47734;
`
export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
	font-family: 'Montserrat';
  line-height: 1.1;
  color: #000;
`
export const Subtitle  = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'Montserrat';
  color: #13131A;
`
export const SubtitlePrice  = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  font-family: 'Montserrat';
  color: #13131A;
`
export const ThreeQuartersWrapper = styled.div`
	flex: 3;
	height: auto;
	border-radius: 16px;
	padding: 16px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	position: relative;
`
export const OneQuarterWrapper = styled.div`
	flex: 1;
	height: auto;
	border-radius: 16px;
	padding: 16px;

	display: flex;
	flex-direction: column;

	position: relative;
`
export const TableWrapper = styled.div`
	width: 100%;
	padding: 8px;
	margin-top: 32px;

	display: flex;
	flex-direction: column;
`
export const TableLine = styled.div`
	padding: 4px;
	margin-bottom: ${({head}) => (head ? '24px' : '12px')};
	font-weight: ${({head}) => (head ? '600' : '400')};
	border-bottom: ${({head}) => (head ? '2px solid #13131A' : '1px solid #13131A')};
	font-size: 16px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
export const TableCell = styled.span`
	flex: ${({name}) => (name ? '2.5' : '1')};
	padding: 4px;
	text-align: ${({name}) => (name ? 'left' : 'center')};
`
export const RemoveButton = styled.div`
	padding: 4px;
	background-color: #B1B1B1;
	width: 24px;
	height: 24px;
	border-radius: 4px;

	margin-left: auto;
	margin-right: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #F1F2F3;
	transition: all 0.5s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #F6F6F6;
		background-color: #A1A1A1;
	}
`
export const SubtotalCard = styled.div`
	width: 100%;
	padding: 16px;
	background-color: #E6E6E6;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	border-radius: 16px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	gap: 16px;
`
export const TitleText = styled.span`
	color: #13131A;
	font-size: 20px;
	font-weight: 500;
`
export const SubtotalValue = styled.span`
	color: #13131A;
	font-size: 18px;
	font-weight: 400;
	align-self: flex-end;
`
export const SubtotalButton = styled.div`
	width: 100%;
	padding: 12px 24px;
	border-radius: 16px;
	background-color: #13131A;
	color: #F6F6F6;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	font-size: 18px;
	font-weight: 600;
	white-space: nowrap;
	outline: none;
	border: none;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.5s ease-in-out;

	&:hover {
		color: #13131A;
		background: #D47734;
	}
`