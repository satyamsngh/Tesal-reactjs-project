import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
       <a>
            <img src='/images/logo.svg' alt=''/>
       </a>
       <Menu>
            <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model Y</a>
            <a href='#'>Model X</a>
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu/>
            
        </RightMenu>
    </Container>
  )
}

export default Header
export const Container=styled.div`
        min-height: 60px;
        position: fixed;
        display: flex;
        align-items: center;
        padding: 0 20px;
        top:0;
        left:0;
        right: 0;

     
`
export const Menu=styled.div`
        display:flex;
        align-items:center;
        justify-content: center;
        flex: 1;


        a{
            font-weight: 600;
            text-decoration:uppercase;
            padding: 0 13px;
            flex-wrap: nowrap;

        }


`
export const RightMenu=styled.div`
        display:flex;
        align-items: center;
        a{
            font-weight: 600;
            text-decoration: uppercase;
            margin-right: 10px;
            

        }


        

`
export const CustomMenu=styled(MenuIcon)`
`


