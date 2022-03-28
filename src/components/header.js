import React, {useState} from 'react'
import styled from "styled-components"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const Header = () => {

    const [burgerStatus,
        setBurgerStatus] = useState(false)
    return (

        <Container>

            <a href="/">

                <img src="/images/logo.svg" alt="logo"/>
            </a>

            <Menu>

                <a href="#0">
                    Model S</a>
                <a href="#0">
                    Model 3</a>
                <a href="#0">
                    Model X</a>
                <a href="#0">
                    Model Y</a>

            </Menu>

            <RightMenu>

                <a href="#0">
                    Shop</a>

                <a className="tesla-account" href="#0">
                    Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>

            </RightMenu>

            <BurgerNav show={burgerStatus}>

                <CloseWrapper>

                    <CustomClose onClick={()=>setBurgerStatus(false)}/>

                </CloseWrapper>

                <li>
                    <a href="#0">Exisiting Inventory</a>
                </li>
                <li>
                    <a href="#0">Used Inventory</a>
                </li>

                <li>
                    <a href="#0">
                        Trade-in</a>
                </li>
                <li>
                    <a href="#0">Cyber Truck</a>
                </li>
                <li>
                    <a href="#0">Model S</a>
                </li>
                <li>
                    <a href="#0">Model 3</a>
                </li>
                     <li>
                    <a href="#0">Model X</a>
                </li>
                     <li>
                    <a href="#0">Model Y</a>
                </li>
                  

            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div `
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1
`

const Menu = styled.div `
display:flex;
align-items:center;
flex:1;
justify-content:center;


 
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;

  &:hover{
      transition: ease-in-out 0.2s;
      border-bottom:5px solid #e82127 ;
      border-radius:3.5px
  }
  
}

@media (max-width: 768px){

  display:none;
}


`

const RightMenu = styled.div `

display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-left:20px;
  margin-right:10px;
 
  flex-wrap:nowrap;
   &:hover{
      transition: ease-in 0.1s;
      border-bottom:5px solid #e82127 ;
  }
}
.tesla-account{
  margin-right:10px
}

`
const CustomMenu = styled(MenuIcon)`

cursor: pointer;

`

const BurgerNav = styled.div `

position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition:transform 0.2s;
li{
  padding: 15px 0;
  border-bottom : 1px solid rgba(0,0,0,.2)

}
a{
  font-weight:600;
}
`

const CustomClose = styled(CloseIcon)`

cursor: pointer;

`

const CloseWrapper = styled.div `
display:flex;
justify-content:flex-end;
`