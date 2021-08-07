import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import MyApp from './App';
import Covaxine from './Covaxine';
import Covishield from './Covishield';
// import './assets/output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App(){
// const na="welcome"
// const ba="our clinic"
// const date= new Date()
// const hours = date.getHours()
// let timeOfDay
// if(hours<12){
//   timeOfDay="Morning"
// }
// else if((hours >=12)&&(hours<17)){
//     timeOfDay="Afternoon"
// }
// else{
//   timeOfDay="Night"
// }
return(
  <section className="todo-list">  
  <header>My ToDo List</header>
  <div className="do">
  
    <input type="checkbox" id="do1" />
    <label htmlFor="do1">
      <span className="label">Morning Run</span>
    </label>
  </div>
  <div className="do">
    <input type="checkbox" id="do2" />
    <label htmlFor="do2">
      <span className="label">Buy Milk</span>
    </label>
  </div>
  <div className="do">
    <input type="checkbox" id="do3" />
    <label htmlFor="do3">
      <span className="label">Learn React</span>
    </label>
  </div>
  <div className="do">
    <input type="checkbox" id="do4" />
    <label htmlFor="do4">
      <span className="label">Workout</span>
    </label>
  </div>
  <div className="do">
    <input type="checkbox" id="do5" />
    <label htmlFor="do5">
      <span className="label">Meditate</span>
    </label>
  </div>
  <footer></footer>
</section>
  )

}

ReactDOM.render(<App/>,document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

