import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 32px;
  a {
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
    &:hover, &:focus, &:active {
      background: #019688;
      color: #fff;
      padding: 4px;
      transition: color .2s, background: .2s;
    }
  }
  
`;
export default () => (
  <PageFooter>
    <Link to="/">go back</Link>
  </PageFooter>
);
