import React from 'react';
import styled from 'styled-components';

const Details = (props) => (
    <Container>
        <h1>Age: {props.age}</h1>
        <h1>Hunger: {props.hunger}</h1>
    </Container>
)

export default Details;

const Container = styled.section`
    margin-bottom: 20px;
`;