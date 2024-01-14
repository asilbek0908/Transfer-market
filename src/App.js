import { Component } from "react";
import PlayerModal from "./components/PlayerModal";

class App extends Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        firstName: "Mbappe",
        age: 23,
        club: "PSG",
        value: 160,
      },
      {
        firstName: "Messi",
        age: 34,
        club: "Paris Saint-Germain",
        value: 180,
      },
      {
        firstName: "Ronaldo",
        age: 37,
        club: "Manchester United",
        value: 150,
      },
      {
        firstName: "Neymar",
        age: 29,
        club: "PSG",
        value: 140,
      },
      {
        firstName: "Salah",
        age: 29,
        club: "Liverpool",
        value: 120,
      },
      {
        firstName: "Kane",
        age: 28,
        club: "Tottenham Hotspur",
        value: 160,
      },
      {
        firstName: "Lewandowski",
        age: 33,
        club: "Bayern Munich",
        value: 140,
      },
      {
        firstName: "De Bruyne",
        age: 30,
        club: "Manchester City",
        value: 150,
      },
      {
        firstName: "Haaland",
        age: 21,
        club: "Borussia Dortmund",
        value: 120,
      },
      {
        firstName: "Kante",
        age: 31,
        club: "Chelsea",
        value: 100,
      },
      {
        firstName: "Fernandes",
        age: 27,
        club: "Manchester United",
        value: 130,
      },
      {
        firstName: "Modric",
        age: 36,
        club: "Real Madrid",
        value: 80,
      },
      {
        firstName: "Varane",
        age: 28,
        club: "Manchester United",
        value: 90,
      },
      {
        firstName: "Hazard",
        age: 31,
        club: "Real Madrid",
        value: 100,
      },
      {
        firstName: "Grealish",
        age: 26,
        club: "Manchester City",
        value: 110,
      },
    ];

    this.setState({
      players,
    });
  }

  removePlayer = (index) => {
    const { players } = this.state;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
          firstName: "None",
          age: 0,
          club: "none",
          value: 0,
        };

    if (type === "age") {
      if (isInc) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;
      }
    }

    if (type === "value") {
      if (isInc) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--;
      }
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  addChanges = () => {
    const { players, currentData } = this.state;
    players.unshift(currentData);
    currentData.firstName = "Player ";
    this.setState({
      players,
      modalVisibility: false,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="container">
        <div className="market">
          <h1> TRANSFER market</h1>
          <div className="row">
            <div className="col">
              <div>
                <button
                  className="btn btn-primary mt-2 mb-3"
                  onClick={this.openModal}
                >
                  Add a player
                </button>
                {modalVisibility ? (
                  <PlayerModal
                    closeModal={this.closeModal}
                    currentData={currentData}
                    changeCurrentData={this.changeCurrentData}
                    addChanges={this.addChanges}
                    clearCurrentData={this.clearCurrentData}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-sm">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>club</th>
                    <th>value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{player.firstName}</th>
                        <th>{player.age}</th>
                        <th>{player.club}</th>
                        <th>
                          <span className="badge text-bg-primary">
                            ${player.value}.00
                          </span>
                        </th>
                        <th>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              this.removePlayer(index);
                            }}
                          >
                            Remove
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
