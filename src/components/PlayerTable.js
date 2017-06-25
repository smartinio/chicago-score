import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlayerTable extends Component {

  constructor(props) {
    super(props)
    this.state = {edit: false, highest: () => Math.max.apply(Math, this.props.players.map(p => p.score))}
  }

  getNewId() {
    const id = this.props.baseID + 1
    this.props.raiseBaseID()
    return id
  }

  isHighest(score) {
    if (score >= this.state.highest() && score !== 0) {
      return <strong>{ score } <span className="icon is-small"><i className="fa fa-flash"> </i></span></strong>
    }
    return score
  }

  componentDidUpdate() {
    if (this.latest && this.state.edit) {
      this.latest.focus();
      this.setState({edit: false})
    }
  }

  getClass(id) {
    return id === this.props.selected ? 'is-selected' : '';
  }

  getChicagoIcon(hasChicago) {
    return hasChicago ? <span style={{cursor: 'pointer'}} onClick={() => this.props.revokeChicago()} className="icon is-pulled-right"><i className="fa fa-star"> </i></span> : ''
  }

  getTradeIcon(score) {
    return score >= 45 ? <span className="icon is-pulled-right"><i className="fa fa-ban"> </i></span> : ''
  }

  getWinnerIcon() {
    const contestants = this.props.players.map((p,i) => {
      let name = p.name !== '' ? p.name : 'Spelare ' + (i+1)
      return {id: p.id, name, score: p.score, chicago: p.chicago}
    });

    const winners = contestants.filter(p => p.score >= 52 && p.chicago),
        formattedWinners = winners.map((p, i) => {
          let fp = winners.length - 1;
          return i === fp ? p.name + '!' : i === fp - 1 ? p.name + ' och ' : p.name + ', ';
        });

    return winners.length > 0 ? <p className="has-text-centered"><br /><strong>♛ <br />{ formattedWinners }</strong></p> : ''
  }

  newPlayer() {
    this.setState({edit:true})
    const id = this.getNewId()
    this.props.addRow(id)
  }

  handleChange(event) {
    let id = parseInt(event.target.name, 10),
        name = event.target.value

    this.props.editPlayerName(name, id)
  }

  getDeleteButtonStyle() {
    let outline = this.props.selected !== -1 ? '' : ' is-outlined';
    return "button is-danger is-fullwidth" + outline;
  }

  render() {
    let playerRow = this.props.players.map((player, index) => (
      <tr key={player.id} onClick={ () => { this.props.onRowClick(player.id, this.props.selected) } } className={ this.getClass(player.id) }>
        <td><input className="invis"
                   name={player.id}
                   ref={ (input) => { this.latest = input } }
                   placeholder={'Spelare ' + (index+1)}
                   defaultValue={player.name || ''}
                   onChange={ this.handleChange.bind(this) } /></td>
        <td>{ this.isHighest(player.score) }</td>
        <td style={{minWidth: "80px"}}>{this.getChicagoIcon(player.chicago)} {this.getTradeIcon(player.score)}</td>
      </tr>
    ));

    return (
      <div style={{marginBottom: '220px'}}>
        <table className="table">
          <thead>
          <tr>
            <th>Namn</th>
            <th>Poäng</th>
            <th style={{minWidth: "80px"}}><span className="icon is-pulled-right"><i className="fa fa-info-circle"> </i></span></th>
          </tr>
          </thead>
          <tbody>
          { playerRow }
          </tbody>
        </table>

        <div className="columns is-mobile is-fullwidth">
          <div className="column">
            <a onClick={ () => this.props.removalHandler(this.props.selected) } className={ this.getDeleteButtonStyle() }>
              <span className="icon is-small"><i className="fa fa-trash-o"> </i></span>
              <span>{ this.props.selected === -1 ? 'Ta bort alla' : 'Ta bort vald'}</span>
            </a>
          </div>

          <div className="column">
            <a onClick={() => this.newPlayer() } className="button is-outlined is-fullwidth">
              <span className="icon is-small"><i className="fa fa-plus"> </i></span>
              <span>Lägg till spelare</span>
            </a>
          </div>
        </div>

        { this.getWinnerIcon() }
      </div>
    )
  }
}

PlayerTable.PropTypes = {
  players: PropTypes.array,
  addRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired,
  getClass: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  revokeChicago: PropTypes.func.isRequired,
  editPlayerName: PropTypes.func.isRequired,
  raiseBaseID: PropTypes.func.isRequired,
  baseID: PropTypes.number.isRequired,
  removalHandler: PropTypes.func.isRequired
};

export default PlayerTable