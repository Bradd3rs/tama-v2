import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import petImg from '../assets/doggy.svg';

class Pet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <ReactSVG path={petImg} />
            </Container>
        );
    }
}

export default Pet;

const Container = styled.section`
    margin-bottom: 20px;
`;