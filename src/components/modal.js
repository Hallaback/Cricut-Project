import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {logo: ""};
  }

  handleClick = (param) => (e) => {
    this.setState({logo: param})
  }

  render() {
    return (
      <div className="modal fade" id={this.props.modalId} tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">My Favorite Video Game Is...</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button type="button" className="btn btn-outline-success" onClick={this.handleClick("show")}>Reveal</button>
              <img className={`container lol-logo ${this.state.logo}`} src="https://i1331.photobucket.com/albums/w592/Unforgotten96/lol_logo1_zpspybshcwp.png"></img>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClick("")}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
