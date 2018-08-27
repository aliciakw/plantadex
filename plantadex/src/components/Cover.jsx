import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const logoUri = 'images/leaf_logo.png';
const Header = styled.header`
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  h1 {
    font-size: 4em;
    margin: 80px 20px 20px 20px;
  }
  h2 {
    margin-top: 0;
  }
`;

const links = [
  { label: 'Table of Contents', to: '/contents' },
  { label: 'Random!', to: '/random' },
  { label: 'Search', to: '/search' }
];

const Cover = () => (
  <div>
    <Header>
      <h1 className="App-title">Plantadex</h1>
      <img src={logoUri} className="App-logo" alt="logo" />
      <img src={logoUri} className="App-logo" alt="logo" />
      <img src={logoUri} className="App-logo" alt="logo" />
    </Header>
    <h2>A Pokedex for plants:</h2>
    <nav>
      <ul>
        {links.map(({ label, to }, i) => (
          <li key={'cover-link-' + i}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Cover;
