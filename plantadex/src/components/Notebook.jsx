import React, { Component } from 'react';
import styled from 'styled-components';

const wrapperHeight = 500;
const wrapperWidth = 600;
const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${wrapperHeight}px;
  width: ${wrapperWidth}px;
  margin-top: ${({ wrapperMarginTop }) => wrapperMarginTop}px;
  margin-left: -${wrapperWidth / 2}px;
  background: white;
  transition: margin .5s;
  overflow: hidden;
  text-align: center;
`;

class Notebook extends Component {
  constructor(props) {
    super(props); // WHY DO WE DO THIS
    this.state = {
      wrapperMarginTop: -900
    };
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        wrapperMarginTop: -1 * wrapperHeight / 2 
      });
    }, 1000);
  }

  render() {
    return (
      <Wrapper wrapperMarginTop={this.state.wrapperMarginTop}>
        {this.props.children}
      </Wrapper>
    );
  }
} 

export default Notebook;
