import React from "react";
import styled from "styled-components";

const Nav = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    .nav-item {
        padding: 8px 10px;
    }

    @media only screen and (max-width: 768px) {
        background-color: var(--neutral-dark);
        color: var(--neutral-light);
        flex-direction: column;
        flex-wrap: nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.2s ease-in-out;
    
        .nav-item:hover {
        background-color: var(--accent-dark);
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Nav open={open}>
            <li className="nav-item">Angebote</li>
            <li className="nav-item">Über mich</li>
            <li className="nav-item">Testimonials</li>
            <li className="nav-item">Kontakt</li>
        </Nav>
    )
}

export default RightNav