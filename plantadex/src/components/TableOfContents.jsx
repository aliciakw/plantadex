import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BackToCover from './partials/BackToCover';
import * as PlantActions from '../actions/plant';

const ERROR_MESSAGE = <p>Sorry, there was an problem getting the list of plants</p>;
const REQUESTING_MESSAGE = <p>Loading plants...</p>;
const EMPTY_MESSAGE = <p>No plants yet.</p>;

const PageList = styled.ul`
  text-align: left;
  margin-left: 60px;
`;

class TableOfContents extends Component {
  componentDidMount() {
    this.props.fetchPlantData();
  }
  render() {
    const { data, hasError, isMakingRequest } = this.props;
    let content;
    if (hasError) {
      content = ERROR_MESSAGE;
    } else if (isMakingRequest) {
      content = REQUESTING_MESSAGE;
    } else {
      content = data && data.length ? (
        <div>
          <h4>Pages</h4>
          <PageList>
            {data.map(({ common_name }, i) => {
              return <li key={i}>{common_name}</li>
            })}
          </PageList>
        </div>
      ) : EMPTY_MESSAGE;
    }
    return (
      <div>
        <h1>TableOfContents component</h1>
        {content}
        <BackToCover />
      </div>
    );
  }
}

const mapStateToProps = ({ plant: { data, hasError, isMakingRequest } }) => ({
  data,
  isMakingRequest,
  hasError
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlantData: () => {
    PlantActions.fetchPlantData(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
