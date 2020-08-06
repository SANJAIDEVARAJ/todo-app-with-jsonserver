import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {  
    constructor(props){
        super();
        this.state={
            output : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4040/output')
          .then(res => {
              console.log(res)
            const persons = (res.data);
            console.log(persons)
            this.setState({output:persons});
          })
      }
        handler =(val) =>{
            const id =Math.floor(Math.random()*100)+1;
            const str ={id:id,title:val}
            this.setState({
        output :[...this.state.output,str]
        
    })
        axios.post('http://localhost:4040/output', str)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        
    
        }   
        delete =(id) => {
           const update =[...this.state.output].filter(item =>{
               return item.id !== id;
              
           }) 

           this.setState({output:update})
           axios.delete(`http://localhost:4040/output/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
        }
        
     render() { 
        return (
           
            <div>
                
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        My Todo App
                </a>
                </nav>
                < TodoForm handler ={this.handler} />
                < TodoList data={this.state.output} delete ={this.delete} />


            </div>
        )
    }
}
export default App;