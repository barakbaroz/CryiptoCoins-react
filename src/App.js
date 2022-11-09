import logo from './logo.svg';
import './coin.css';
import React from 'react';



function App(props) {
  return (
    <SearchableCoinCrypitoList coins={props.coins}/>
  );
}




class Percentage extends React.Component{
  render(){ 
    const precent=this.props.precent;
     if (precent<0)
       {
        return  <h5 className='red-precent coin-precent'> {precent}%</h5>
       }
     else
       {
        return <h5 className='green-precent coin-precent'>{precent}%</h5>
       }
    }
     
}



class CoinRow extends React.Component{
  render(){
    const coin=this.props.coin;
    const src= coin.src;

    return(
      <div className='coin-row'>
         <div className='coin-id'>
             <img src={src}  className='coin-img'/>
             <h1>{coin.name}</h1>
         </div>
         <div className='coin-data'>     
             <h5 >{coin.price}</h5>
             <Percentage className='coin-precent' precent={coin.precent}/>
             <h5 className='coin-marketcap'>{coin.marketcap}</h5>
         </div>
      </div>
    )
  }
}
class CoinCrypitoList extends React.Component{
  render(){
  const  filterText=this.props.filterText;
     let rows=[];
      this.props.coins.forEach(coin => {
       if ( coin.name.indexOf(filterText)===-1)
       return; 
       rows.push(<CoinRow 
                   coin={coin}
                   key={coin.name}  />)
               
      })
      return(
      <div className='coin-con'>
      {rows}
      </div>
    )
  }
}



class SearchBar extends React.Component{
  render(){
    return(
      <div className='coin-search'>
        <form>
           <input 
           className='coin-input' 
           type="text" 
           placeholder="Provide the coin name"
           value={this.props.filterText}
           onChange={this.props.onChange}/>
        </form>  
      </div>
    )
  }
}


class SearchableCoinCrypitoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      filterText:'',
    }
    this.eventHandle=this.eventHandle.bind(this);
   }
   

    eventHandle(e) {
      this.setState({filterText: e.target.value});
   
    
   }
  render(){
    return(
      <div className='top-app  '>
        <SearchBar
          filterText={this.state.filterText} 
          onChange={this.eventHandle}
        />
         <CoinCrypitoList 
           coins={this.props.coins}
           filterText={this.state.filterText}
         />
      </div>
   )
  }
}












export default App;