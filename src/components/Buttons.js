import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {add: true}
  }
  pointHandler(score) {
    if (this.state.add)
      this.props.increment(score)
    else {
      this.props.decrement(score)
      this.setState({add: true})
    }
  }

  getLabel(score) {
    return this.state.add? score : '-' + score
  }

 render() {
   return (
     <div style={{position: 'relative', width: '100%'}}>
       <div className="columns is-mobile">

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.resetExcept()} className="button is-outlined is-fullwidth">Nolla övriga</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.resetAll()} className="button is-primary is-fullwidth">Börja om</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.setState({add: !this.state.add})} className="button is-danger is-fullwidth">
                 <span className="icon"><i className={this.state.add? 'fa fa-minus' : 'fa fa-mail-reply' }> </i></span>
               </a>
             </p>
           </div>
         </div>

       </div>
       <div className="columns is-mobile">

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(1)} className="button is-dark is-fullwidth">
                 { this.getLabel(1) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(2)} className="button is-dark is-fullwidth">
                 { this.getLabel(2) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(3)} className="button is-dark is-fullwidth">
                 { this.getLabel(3) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(4)} className="button is-dark is-fullwidth">
                 { this.getLabel(4) }
               </a>
             </p>
           </div>
         </div>

       </div>
       <div className="columns is-mobile">

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(5)} className="button is-dark is-fullwidth">
                 { this.getLabel(5) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(6)} className="button is-dark is-fullwidth">
                 { this.getLabel(6) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.pointHandler(7)} className="button is-dark is-fullwidth">
                 { this.getLabel(7) }
               </a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => { this.pointHandler(15); this.props.markChicago() } } className="button is-dark is-fullwidth">
                 <span className="icon is-small" style={this.state.add? {} : {display: 'none'}}>
                   <i className="fa fa-star"> </i>
                 </span>
                 <span>{ this.getLabel(15) }</span>
               </a>
             </p>
           </div>
         </div>

       </div>
     </div>
   );
 }
}

Buttons.PropTypes = {
  increment: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  markChicago: PropTypes.func.isRequired
}

export default Buttons