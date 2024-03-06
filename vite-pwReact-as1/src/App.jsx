import Person from './Person'
import './App.css'
import Button from './Button'

function App() {
  

  return (
    <>
    <div>
      <h2>HI</h2>
      <Person name ="Biswarup " age ="23" />
      <Person name ="Amit" age ="24" />

      <Button text = "Click Me" onClick = {()=>console.log('Button Clicked')} />

      <Button text ="Click me" onClick = {()=>console.log("Thanks")}/>
      {/* </Person> */}
    </div>
         
    </>
  )
}

export default App
