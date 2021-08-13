import React, { Component } from 'react';
import axios from 'axios';

export default class AutoCompleteModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nomResultats: [],
        };
      }
      componentDidUpdate(prevprops){
        if(this.props.mots !== prevprops.mots) {
            const motsCle = this.props.mots ;
                console.log("motsCle ==>",motsCle);
                axios.post('http://localhost/apiRecherche/recherche.php', {motsCle})
                .then(response => this.setState({ nomResultats: response.data }));
        }
      }
      
    render() {
        return (
            <div>
                {this.state.nomResultats.length>0 &&
                <div className="suggestionBox">
                    {this.state.nomResultats.map((el, index)=> (
                        <div className="elemAutoComp" key={index}>
                            {el.nom}
                        </div>
                    
                    )) }
                   
                </div>
                
            }
            </div>
        )
    }
}
