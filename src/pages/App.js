import React  from "react";
import '../styles/App.css';

const UserState={
   nome:'',
   email:'',
   password:''
};

class App extends React.Component{
    constructor(props){
       super(props);
       this.state ={name :'Mario Carlos'};
    }


    handlerUserName(name){ 
       this.setState({name:name});
    }
    render(){
  
      return (
           <button className="button">Adicionar</button>
      //    <div>
      //        <h1>Hello , {this.state.name}</h1>
      //        <button onClick={()=> {this.handlerUserName('Mario')}}>Master Wooly</button>
      //        <button  onClick={()=>console.log('welcome to reactive')}>Ken the Ninja</button>
      //    </div>
      // )
      )
    }
}

export default App;



 
