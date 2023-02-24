import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {

    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
    return (
        <>
        <Wrapper>
            <Content>
                <Section title="Model 3" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="Model Y" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="Model S" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="Model X" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="Solar Panels" desc="Lowest Cost Solar Panels in America" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-panel.jpg"/>
            </Content>
            <Content>
                <Section title="Solar Roof" desc="Produce Clean Energy From Your Roof" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-roof.jpg"/>
            </Content>
            <Content>
                <Section title="Accessories" leftbtn="SHOP NOW" backgroundImg="accessories.jpg"/>
                
            </Content>
        </Wrapper>
        </>
    )
}

export default Home

export const Wrapper = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
`;

export const Content = styled.div`
    scroll-snap-align: start;
`;

