import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import BackToCover from './partials/BackToCover';
import * as PlantActions from '../actions/plant';

class TableOfContents extends Component {
  constructor(props) {
    super(props);
    this.requestPlants = this.requestPlants.bind(this);
  }
  requestPlants() {
    console.log('requesting plants!');
    this.props.actions.requestPlantData();
  }
  render() {
    return (
    <div>
      <h1>TableOfContents component</h1>
      <button onClick={this.requestPlants}>Request</button>
      <BackToCover />
    </div>
    );
  }
}

const mapStateToProps = ({ plants }) => ({
  plants
});
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(PlantActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
