import React from"react";

class TodoForm extends React.Component {
  
        state = {values: ''};        
    
    handler =(e) =>{
        e.preventDefault();
        if(this.state.values === '')return;
        this.props.handler(this.state.values);
        this.setState({values:''});
        //this.setState({value:[...this.props.data,this.state.value]});
    
        console.log(this.state.values);
       
       
    }
    
    
    render(){
        return (
         <div className="form-group">
             <form onSubmit={this.handler}>
                 <input type ="text"  className="form-control" value ={this.state.values} onChange={(e) =>this.setState({values:e.target.value})} />
             <button type ="submit" className="btn btn-primary">Add</button>
             </form>
         </div>
     )
    }

}
 export default TodoForm;