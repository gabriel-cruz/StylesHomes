import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #2d3844;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
`

const Item = styled.div `
font-size: 14px;
font-family: sans-serif;
font-weight: bold;
color: #fff;
padding: 10px;`

export default function header() {
    return (
        <div>
            <Nav>
                <Item>Home</Item>
                <Item>Contato</Item>
                <Item>Sobre</Item>
            </Nav>

            
        </div>
    );
}
