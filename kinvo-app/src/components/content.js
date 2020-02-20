import React, {Component} from 'react';
import ItemList from './itemList';
import TopButton from './topButton';
import Summary from './summary';

class Content extends Component{
    
    render(){
        if(this.props.isLoaded){
            return(
                <div>
                    <div>
                        <div className="headList">
                            Análise por Classe de Ativos
                        </div>
                        
                        <TopButton topButton={this.props.topButton} onEventTopButton={this.props.onEventTopButton}/>
    
                        <div className="background-list">

                            {this.props.topButton[0]===1 ?
                                <Summary topButton={this.props.topButton} list={this.props.list}/>
                                : null
                            }
                            
                            <div className="listSpace">
                                {this.props.topButton[0]===1 ?
                                    <div className="listSpace">
                                        <div className="fundos">Fundos</div>
                                        <input type="textArea" value={this.props.search} onChange={this.props.onUpdateSearch} className="searchBox"/>
                                    </div>
                                    : null
                                }
                            </div>
                        
                            <div className="listSpace roll">
                                {this.props.topButton[0]===1 ?
                                    <div>
                                        {this.props.list.data.products.filter(product =>{
                                            return product.productName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
                                        }).map(product =>{
                                            return <ItemList product={product} carteiraTotal={this.props.list.data.summary.grossBalance}/>
                                        })}
                                    </div>
                                    :null
                                }
                            </div>
                        </div>
                    </div>
    
                </div>
            );
        }else{
            return <h3>loading</h3>;
        }
        
    }
    
    
    

    
}

export default Content;