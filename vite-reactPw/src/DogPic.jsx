
import Image  from "./image"
//component
export function DogPic(props){
    return(
        <div>
            {/* <CatImg/> */}
            <h3>{props.name}</h3>
            
            <Image src={props.image}></Image>
            
        </div>
        

    )
}

export function CatImg(){
    return <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=600"></img>

}


// export default DogPic;

// export default CatImg;
