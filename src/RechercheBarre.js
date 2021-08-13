import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import AutoCompleteModule from './AutoCompleteModule';


export default class RechercheBarre extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputRecherche: "",
        };
      }
      handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };
      handleClickDeleteTxt(){
          this.setState({inputRecherche: ""})
      }

    render() {
        let inputRecherche = this.state.inputRecherche
        return (
            <div className="rechercheBox">
                <FormControl className="form">
                    <InputLabel htmlFor="standard-adornment-password">Recherche</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type= 'text'
                        value={inputRecherche}
                        name="inputRecherche"
                        onChange={this.handleChange}
                        endAdornment={
                        
                        <InputAdornment position="end">
                            {inputRecherche !== "" && 
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => this.handleClickDeleteTxt()}
                            >
                            
                                <ClearIcon />
                            </IconButton> }
                            
                        </InputAdornment>
                    }
                />
                </FormControl>
                <div className="autoC">
                    <AutoCompleteModule mots={this.state.inputRecherche} />
                </div>
            </div>
        )
    }
}
