import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Controlls = ({ feed, clean }) => (
    <Container>
        <Button buttonText="Feed" onClick={feed} />
        <Button buttonText="Clean" onClick={clean} />
    </Container>
)

export default Controlls;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;