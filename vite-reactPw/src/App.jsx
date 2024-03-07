
import './App.css'
import Counter from './Counter'

// import DogPic from'./DogPic'
import {DogPic,CatImg} from './DogPic'



function App() {
 
  let title = 'Dog Photograph'
  return (
  
    <>
      <h2 style={
        {
          fontSize: '20px', 
          color: 'red'
        }
        }>
      {title}
    </h2>
      Hey Biswarup

      <button id='btn'>
        <span>
          Submit
        </span>
      </button>

      <DogPic name="Bruno" image="" ></DogPic>
      {/* <CatImg></CatImg> */}
      <DogPic name='Simbu' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLLBm-9K_Qdt9hlcpe-r-7MVpftfiWayrlQ&usqp=CAU'></DogPic>

      <Counter></Counter>
     
    </>
  )
}

export default App
