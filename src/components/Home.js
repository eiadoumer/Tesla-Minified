import React from 'react'
import styled from 'styled-components'
import Section from "./Section.js"

const Home = ({id}) => {

    const text = "Order Online for Touchless Delivery"
    return (
        <Container>
            <Section className="section"
            
                key={id}
               
                title="Model S"
                description={text}
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>
            <Section
                key={id}
                title="Model Y"
                description={text}
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>
            <Section
                key={id}
                title="Model 3"
                description={text}
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>
            <Section
                key={id}
                title="Model X"
                description={text}
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>

            <Section
                key={id}
                title="Lowest Cost Solar Panel in America "
                description="Money back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>

                 <Section
                key={id}
                title="Solar for New Roofs "
                description="Solar Roof Costs Less Than a New Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"/>

                 <Section
                key={id}
                title="Accessories "
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Custom order" />
        </Container>
    )
}

export default Home

const Container = styled.div `
height:100vh;



`