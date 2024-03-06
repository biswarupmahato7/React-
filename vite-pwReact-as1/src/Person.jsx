function Person(props){
  return(
    <div>
        <p style={{fontSize: "20px" , color: "Blue"}}>
            Name is {props.name} and age is {props.age} 
        </p>
    </div>
  )

}

export default Person