import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="band">Band</label>
          <input type="text" name="band" onChange={this.handleOnChange} value={this.state.name}/>
          <input type="button" value="Enter Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
