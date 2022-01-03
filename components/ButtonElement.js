import styled from "styled-components";

export const Button = styled.div`
    align-self: flex-start;

    background: #13131A;
    color: #E6E6E6;
    border-radius: 16px;
    padding: 14px 48px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    font-size: 20px;
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