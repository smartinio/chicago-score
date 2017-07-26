import React from 'react';
import PropTypes from 'prop-types';

class PlayerTable extends React.Component {

  static getInputSize(str) {
    let len = str.length > 0 ? str.length : 8;
    len = len * 10 > 135 ? 135 : len * 10;

    return `${len}px`;
  }

  static getTradeIcon(score) {
    return score >= 45 ? <span className="icon is-pulled-right"><i className="fa fa-ban" /></span> : '';
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: false, highest: () => Math.max(...this.props.Players.map(p => p.score)),
    };
  }

  componentDidUpdate() {
    if (this.latest && this.state.edit) {
      this.latest.focus();
      this.setState({ edit: false });
    }
  }

  getNewId() {
    const id = this.props.baseID + 1;
    this.props.raiseBaseID();
    return id;
  }

  getClass(id) {
    return id === this.props.selected ? 'animated fadeIn is-selected' : 'animated fadeIn';
  }

  getChicagoIcon(hasChicago) {
    return hasChicago ?
      <span
        tabIndex="-1"
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => this.props.revokeChicago()}
        className="icon is-pulled-right"
      >
        <i className="fa fa-star" />
      </span> : '';
  }

  getWinnerIcon() {
    const contestants = this.props.Players.map((p, i) => {
      const name = p.name !== '' ? p.name : `Spelare ${i + 1}`;
      return { id: p.id, name, score: p.score, chicago: p.chicago };
    });

    const winners = contestants.filter(p => p.score >= 52 && p.chicago);
    const formattedWinners = winners.map((p, i) => {
      const fp = winners.length - 1;

      if (i === fp) {
        return `${p.name} vann!`;
      }

      if (i === fp - 1) {
        return `${p.name} och `;
      }

      return `${p.name}, `;
    });

    return winners.length > 0 ?
      <p className="has-text-centered">
        <br />
        <strong>♛ <br />{ formattedWinners }</strong>
      </p> : '';
  }

  getDeleteButtonStyle() {
    const outline = this.props.selected !== -1 ? '' : ' is-outlined';
    return `button is-danger is-fullwidth${outline}`;
  }

  newPlayer() {
    this.setState({ edit: true });
    const id = this.getNewId();
    this.props.addRow(id);
  }

  handleChange(event) {
    const id = parseInt(event.target.name, 10);
    const name = event.target.value;

    this.props.editPlayerName(name, id);
  }

  isHighest(score) {
    if (score >= this.state.highest() && score !== 0) {
      return (
        <strong>
          { score }
          <span className="icon is-small">
            <i className="fa fa-flash" />
          </span>
        </strong>
      );
    }
    return score;
  }

  focusHandler() {
    this.props.showButtons(false);
  }

  blurHandler() {
    this.props.showButtons(true);
  }

  render() {
    const playerRow = this.props.Players.map((player, index) => (
      <tr
        key={player.id}
        onClick={() => { this.props.onRowClick(player.id, this.props.selected); }}
        className={this.getClass(player.id)}
      >
        <td style={{ minWidth: '160px' }}>
          <input
            size="1"
            className="invis"
            onFocus={this.focusHandler.bind(this)}
            onBlur={this.blurHandler.bind(this)}
            style={{ width: PlayerTable.getInputSize(player.name) }}
            name={player.id}
            ref={(input) => { this.latest = input; }}
            placeholder={`Spelare ${index + 1}`}
            defaultValue={player.name || ''}
            onChange={this.handleChange.bind(this)}
          />
        </td>
        <td>{ this.isHighest(player.score) }</td>
        <td style={{ minWidth: '80px' }}>
          {this.getChicagoIcon(player.chicago)}
          {PlayerTable.getTradeIcon(player.score)}
        </td>
      </tr>
    ));

    return (
      <div style={{ marginBottom: '0' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Namn</th>
              <th>Poäng</th>
              <th style={{ minWidth: '80px' }}><span className="icon is-pulled-right"><i className="fa fa-info-circle" /></span></th>
            </tr>
          </thead>
          <tbody>
            { playerRow }
          </tbody>
        </table>

        <div className="columns is-mobile">
          <div className="column">
            <button
              disabled={this.props.Players.length === 0}
              onClick={() => this.props.removalHandler(this.props.selected)}
              className={this.getDeleteButtonStyle()}
            >
              <span className="icon is-small"><i className="fa fa-trash-o" /></span>
              <span>{ this.props.selected === -1 ? 'Ta bort alla' : 'Ta bort vald'}</span>
            </button>
          </div>

          <div className="column">
            <button onClick={() => this.newPlayer()} className="button is-outlined is-fullwidth">
              <span className="icon is-small"><i className="fa fa-plus" /></span>
              <span>Lägg till</span>
            </button>
          </div>
        </div>

        { this.getWinnerIcon() }
      </div>
    );
  }
}

PlayerTable.propTypes = {
  Players: PropTypes.arrayOf(PropTypes.object).isRequired,
  addRow: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  revokeChicago: PropTypes.func.isRequired,
  editPlayerName: PropTypes.func.isRequired,
  raiseBaseID: PropTypes.func.isRequired,
  baseID: PropTypes.number.isRequired,
  removalHandler: PropTypes.func.isRequired,
  showButtons: PropTypes.func.isRequired,
};

export default PlayerTable;
