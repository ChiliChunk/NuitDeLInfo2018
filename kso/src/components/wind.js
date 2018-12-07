import React from 'react';

class Wind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: Boolean
    }
    this.state.isLoaded = false;
  }

  componentDidMount() {

  }


  render() {
      return(
        <div>
        <p>{this.props.speed}</p>
          <img src="" />
        </div>
      )
  }
}
export default (Wind);
