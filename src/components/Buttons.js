import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Buttons extends Component {

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
               <a onClick={() => this.props.undo()} className="button is-danger is-fullwidth">Ångra</a>
             </p>
           </div>
         </div>

       </div>
       <div className="columns is-mobile">

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(1)} className="button is-dark is-fullwidth">1</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(2)} className="button is-dark is-fullwidth">2</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(3)} className="button is-dark is-fullwidth">3</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(4)} className="button is-dark is-fullwidth">4</a>
             </p>
           </div>
         </div>

       </div>
       <div className="columns is-mobile">

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(5)} className="button is-dark is-fullwidth">5</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(6)} className="button is-dark is-fullwidth">6</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => this.props.increment(7)} className="button is-dark is-fullwidth">7</a>
             </p>
           </div>
         </div>

         <div className="column">
           <div className="field">
             <p className="control">
               <a onClick={() => { this.props.increment(15); this.props.markChicago() } } className="button is-dark is-fullwidth">
                 <span className="icon is-small">
                   <i className="fa fa-star"> </i>
                 </span>
                 <span>15</span>
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