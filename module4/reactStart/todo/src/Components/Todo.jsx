import React, { Component } from 'react';

class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[],
      currTask:''
    }
  }

  handleChange = (e)=>{
    
    this.setState({
      currTask:e.target.value
    })
  }

  handleTask=()=>{
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
      currTask:''
    })
  }

  handleDelete=(id)=>{
    this.setState({
      tasks:this.state.tasks.filter((taskObj)=>{return taskObj.id!=id})
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.currTask} onChange={this.handleChange}/>
        <button onClick={this.handleTask}>Add Task</button>
        <ul>
          {
            
            this.state.tasks.map((taskObj)=>(
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
              </li>
            ))
          }
          
        </ul>
      </div>
    )
  }
}

export default Todo;


