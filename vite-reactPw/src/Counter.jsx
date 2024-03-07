
import { useState } from "react";

function Counter(){
    const[x,setX] = useState(0); //initial value
    const[y,setY] = useState(0);

    const[todos,setTodos] = useState([]);
    
    return(
        <>
        count X: {x} is {(x % 2) ? 'even' : 'odd'}
        <button onClick ={()=> setX(x+1)}>Inc
        </button>

        <button onClick={() => setX(x-1)}>Dec
        </button>
        <br />

        Count Y: {y} 
     
        <button onClick={()=> setY(y+1)}>Inc</button>
        <button onClick={()=> setY(y-1)}>Dec</button>

        <ul>
            
       {todos.map((todo) => <li>{todo}</li>)}
       <button onClick={()=> setTodos([...todos,'anotherOne'])}>Click</button>

        </ul>

        </>
    )

}
export default Counter;