import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick();
    }
    render() {
        return (
            <Container type="button" onClick={this.handleClick}>{this.props.buttonText}</Container>
        );
    }
}

export default Button;

const Container = styled.button`
    padding: 10px;
    border: 2px solid rebeccapurple;
    border-radius: 2px;
    background: white;
    color: rebeccapurple;
`;