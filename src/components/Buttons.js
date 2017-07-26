import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = { add: true };
  }

  getLabel(score) {
    return this.state.add ? score : `-${score}`;
  }

  notify(score) {
    const symbol = score > 0 ? '+' : '';
    const color = score > 0 ? 'green' : 'red';

    const Notification = ({ points, player }) =>
    (
      <div style={{ fontSize: '1.5em', color, paddingTop: '8px', height: '100%' }}>
        {symbol}{points} till {player}
      </div>
    );

    toast(<Notification points={score} player={this.props.currentPlayerName} />);
  }

  chicagoHandler() {
    if (this.state.add) {
      this.props.markChicago();
      this.notify(15);
      return;
    }
    this.pointHandler(15);
  }

  pointHandler(score) {
    if (this.state.add) {
      this.props.increment(score);
      this.notify(score);
      return;
    }
    this.props.decrement(score);
    this.notify(-score);
    this.setState({ add: true });
  }

  render() {
    function scoreButton(p) {
      return (
        <div className="column" key={`score${p.toString()}`}>
          <div className="field">
            <p className="control">
              <button onClick={() => this.pointHandler(p)} className="button is-dark is-fullwidth">
                { this.getLabel(p) }
              </button>
            </p>
          </div>
        </div>
      );
    }

    function actionButton(p) {
      return (
        <div className="column" key={p.prop}>
          <div className="field">
            <p className="control">
              <button
                onClick={() => this.props[p.prop]()}
                className="button is-outlined is-fullwidth"
              >
                {p.text}
              </button>
            </p>
          </div>
        </div>
      );
    }

    const topRow = [
      { prop: 'resetExcept', text: 'Nolla övriga' },
      { prop: 'resetAll', text: 'Börja om' },
    ].map(actionButton.bind(this));
    const midRow = [1, 2, 3, 4].map(scoreButton.bind(this));
    const bottomRow = [5, 6, 8].map(scoreButton.bind(this));

    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <div className="columns is-mobile">
          { topRow }

          <div className="column">
            <div className="field">
              <p className="control">
                <button
                  onClick={() => this.setState({ add: !this.state.add })}
                  className="button is-danger is-fullwidth"
                >
                  <span className="icon"><i className={this.state.add ? 'fa fa-minus' : 'fa fa-mail-reply'} /></span>
                </button>
              </p>
            </div>
          </div>

        </div>

        <div className="columns is-mobile">
          { midRow }
        </div>

        <div className="columns is-mobile">
          { bottomRow }

          <div className="column">
            <div className="field">
              <p className="control">
                <button
                  onClick={() => this.chicagoHandler()}
                  className="button is-dark is-fullwidth"
                >
                  <span className="icon is-small" style={this.state.add ? {} : { display: 'none' }}>
                    <i className="fa fa-star" />
                  </span>
                  <span>{ this.getLabel(15) }</span>
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Buttons.propTypes = {
  currentPlayerName: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  markChicago: PropTypes.func.isRequired,
};

export default Buttons;
