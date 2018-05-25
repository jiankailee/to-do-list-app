import React from 'react';


export default class ToDoList extends React.Component{
  constructor(props){
      super(props);
      this.state={
        items;[]
      };
      this.addItem=this.addItem.bind(this);
  }
  addItem(e){
    if(this._inputElement.value!=""){
      var newItem={
        text:this._inputElement.value,
        key: Date.now()
      };

      this.setState((s)=>{
        return{
          items:e.items.concat(newItem);
        };
      });
    }
  }
  render(){
    return(
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addItem}>
          <input ref={(a)=>this._inputElement=a}
          placeholder="enter"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}