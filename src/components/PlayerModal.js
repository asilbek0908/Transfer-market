import { Component } from "react";

class PlayerModal extends Component {
  changeCurrentData = (type, isInc) => {
    this.props.changeCurrentData(type, isInc);
  };

  saveChanges = () => {
    this.props.addChanges();
  };

  componentWillUnmount() {
    this.props.clearCurrentData();
  }

  render() {
    const { currentData } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">➕Add player</div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-5">
              <h1>Player's age:</h1>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.changeCurrentData("age", false);
                  }}
                >
                  -
                </button>
                <button className="btn">
                  {currentData ? currentData.age : 0}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.changeCurrentData("age", true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw275aae3f/images/large/701225688001_pp_02_mcfc.png?sw=1600&sh=1600&sm=fit"
                alt="adding player"
              />
            </div>
            <div className="col-5">
              <h1>Players's value</h1>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.changeCurrentData("value", false);
                  }}
                >
                  -
                </button>
                <button className="btn">
                  💰 ${currentData ? currentData.value : 0}.00
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.changeCurrentData("value", true);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-warning m-1"
            onClick={this.props.closeModal}
          >
            Cancel
          </button>
          <button className="btn btn-success m-1" onClick={this.saveChanges}>
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

export default PlayerModal;
