

import React, { useState } from 'react';
import './coin.css';
import {DragDropContext, Droppable, Draggable  }  from 'react-beautiful-dnd';




function App(props) {
  return (
    <SearchableCoinCrypitoList coins={props.coins}/>
  );
}




   function Percentage(props){ 
    const precent=props.precent;
     if (precent<0)
       {
        return  <h5 className='red-precent coin-precent'> {precent}%</h5>
       }
     else
       {
        return <h5 className='green-precent coin-precent'>{precent}%</h5>
       }
    }
     




 function CoinRow (props){
  
    const coin=props.coin;
    const src= coin.src;
    const { provided, innerRef } = props;

    return(
      <div className='coin-row'   {...provided.draggableProps}     {...provided.dragHandleProps}
              ref={innerRef}>
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

function CoinCrypitoList(props) {

  const [coins, updatecoins] = useState(props.coins);
 
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    
    const items = Array.from(coins);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

     updatecoins(items);
    }

  const filterText=props.filterText.toLowerCase();
     let rows=[];
    
     coins.forEach((coin,index )=> {
       if (coin.name.toLowerCase().indexOf(filterText)===-1)
       return; 
       rows.push(<Draggable key={coin.name} draggableId={coin.name} index={index}>
                  {(provided) => (
                      <CoinRow  
                      innerRef={provided.innerRef}
                      provided={provided}
                        coin={coin}
                      />
                   )}
                   </Draggable>
                )})
           return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="coinss">
               {(provided) => (
                 <div className='coin-con'  {...provided.droppableProps} ref={provided.innerRef}>
                  {rows}
                  {provided.placeholder}
                 </div>
               ) }
             </Droppable>
         </DragDropContext>
    )
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