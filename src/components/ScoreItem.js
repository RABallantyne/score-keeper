import React, { Component } from "react";

export default class ScoreItem extends Component {
  state = {
    score: this.props.roundScore,
    showScoreForm: this.props.roundScore ? false : true
  };

  changeScore = event => {
    const { name, value } = event.target;
    let n = +value;
    if (!n) {
      alert("please enter a number.");
      return null;
    }
    this.setState({
      [name]: n
    });
  };

  submitScore = event => {
    const { team, index } = this.props;
    event.preventDefault();
    this.props.updateScore(team.id, this.state.score, index);
    this.toggleScoreForm();
  };

  toggleScoreForm = () => {
    this.state.showScoreForm
      ? this.setState({
          showScoreForm: false
        })
      : this.setState({
          score: 0,
          showScoreForm: true
        });
  };
  render() {
    // console.log(this.props.roundScore);
    return (
      <td>
        {this.state.showScoreForm ? (
          <>
            <p>current score: {this.props.roundScore}</p>
            <form onSubmit={this.submitScore}>
              <input
                pattern="[0-9]*"
                name="score"
                onChange={this.changeScore}
                placeholder="0"
                value={this.state.score}
              ></input>
              <button>save</button>
            </form>
          </>
        ) : (
          <p onClick={() => this.toggleScoreForm()}>{this.props.roundScore}</p>
        )}
      </td>
    );
  }
}
