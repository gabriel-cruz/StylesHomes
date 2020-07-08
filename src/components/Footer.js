import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer `
background-color: #2d3844;
position: fixed;
bottom: 0;
letf: 0;
height: 40px;
width: 100%;
align-items: center;
display-flex;
justify-content: center;
`
const FooterItem = styled.div `
text-decoration: none;
font-size: 16px;
color: #fff;
font-weight: bold;
text-align: center;
`

export default function Footer() {
    return (
        <React.Fragment>
            <MyFooter>
                <FooterItem> Aula Sobre Styled Components </FooterItem>
            </MyFooter>
        </React.Fragment>
    )
}
