import React, {useState} from "react";
import styled from 'styled-components';
import RightNav from "./RightNav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? 'var(--neutral-light)' : 'var(--accent-dark)'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(38deg)' : 'rotate(0)'};
            width: ${({ open }) => open ? '2.3rem' : '2rem'};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-38deg)' : 'rotate(0)'};
            width: ${({ open }) => open ? '2.3rem' : '2rem'};
        }
    }
`;


const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open = {open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} />
        </>
    )
}

export default Burger