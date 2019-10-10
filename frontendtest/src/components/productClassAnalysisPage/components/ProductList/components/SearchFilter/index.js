import React, {Component} from 'react';
import './styles.css';

export default class SearchFilter extends Component {

    render() {
      const{searchProductInputHandleChange} = this.props;

      return(
        <div className="searchTab">
                                    
            <h4>Fundos</h4>
    
            <div className="searchTool">
                <a href="#"><img className="searchIcon" src={require('../../../../images/searchIcon.svg')}></img></a>
                <input onChange={searchProductInputHandleChange} className="searchProductInput"></input>                                    
            </div>
    
        </div>

      )

    }

}
