import React from 'react';
import styled from 'styled-components';


const MyContent = styled.main `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;`

const ContentItem = styled.p `
color: #fff;
text-align: center;
font-family: sans-serif;
box-sizing: border-box;
margin: 40px;
padding: 20px;
background-color: #2d3844;
`

export default function Content() {
    return (
        <React.Fragment>
            <MyContent>
                <ContentItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ContentItem>
                <ContentItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ContentItem>
            </MyContent>
        </React.Fragment>
    )
}
