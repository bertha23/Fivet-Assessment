import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/main.css';

function Dashboard ()
{
    /*function Item(props) {
        return <p id='item1pg1'>{pinneditem1}</p>;
      }
      
      function Pin(props) {
        const isPinned = props.isPinned;
        if (isPinned) {
          return <Item/>;
        }
        return <></> ;
      }

    function Pinning1(props) {
        return (
          <p id='item1pg1' onClick={props.onClick}>
            {pinneditem1}
          </p>
          
        );
      }
      
      function Unpinning1(props) {
        return (
            <p id='item1pg1' onClick={props.onClick}>
            {pinneditem1}
          </p>
        );
      }

    class PinningItemsControl extends React.Component {
        constructor(props) {
          super(props);
          this.handlePinning = this.handlePinning.bind(this);
          this.handleUnpinning = this.handleUnpinning.bind(this);
          this.state = {isPinned: false};
        }
      
        handlePinning() {
          this.setState({isPinned: true});
        }
      
        handleUnpinning() {
          this.setState({isPinned: false});
        }

        render() {
            const isPinned = this.state.isPinned;
            let item;
            if (isPinned) {
             item = <Unpinning1 onClick={this.handleUnpinning} />;
            } else {
              item = <Pinning1 onClick={this.handlePinning} />;
            }
            return (
                <div>
                  <Pin isPinned={isPinned} />
                  {item}
                </div>
              );
        }
    } 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <PinningItemsControl />
      </React.StrictMode>
    );*/

    const pinneditem1 = localStorage.getItem("Item1");
    const pinneditem2 = localStorage.getItem("Item2");
    const pinneditem3 = localStorage.getItem("Item3");

    const pinneditem4 = localStorage.getItem("Item_1");
    const pinneditem5 = localStorage.getItem("Item_2");
    const pinneditem6 = localStorage.getItem("Item_3");

   /*function ShowPinnedItems (){
      let item;
    
      if (pinneditem1=="Pinned") 
      {
        item= <p id='item1pg1'>{pinneditem2}</p>
      } 
      else {
          item = <p id='item1pg1' onClick={useEffect=()=>{
            localStorage.setItem("Item1", "Unpin");}}>  </p>
          }
      
      return(
        item
      )
    }*/
    return (
        <div>
            <h2>Dashboard</h2><br/>
            <p id='item1pg1'>{pinneditem1} Page 1</p><br/>
            <p id='item2pg1'>{pinneditem2} Page 1</p><br/>
            <p id='item3pg1'>{pinneditem3} Page 1</p><br/>
            <p id='item1pg2'>{pinneditem4} Page 2</p><br/>
            <p id='item2pg2'>{pinneditem5} Page 2</p><br/>
            <p id='item3pg2'>{pinneditem6} Page 2</p>
            

        </div>
    );
}

export default Dashboard;

