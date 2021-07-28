import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProp = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", band})
  }
}
const mapStateToProp = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(BandsContainer);