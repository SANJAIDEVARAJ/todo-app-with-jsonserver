import React from"react";

class TodoList extends React.Component {
   
    delete =(id) => {
        console.log(id)
        this.props.delete(id);

    }
    render =() => {
       
        return (
            <ul className ="list-group">
                {this.props.data.map((item)=> {
                    return <div>
                      <li className="list-group-item" key={item.id}>{item.title} <button className="btn float-right" onClick ={this.delete.bind(this,item.id)}>Delete</button>                     
                          
                
                       
                          </li>
                    </div>

                })}
            
            </ul>
        )
    }
}
export default TodoList;