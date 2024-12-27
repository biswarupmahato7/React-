import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  
  
  }, [])
  
  return (
    <div className='p-5'>
        {/* <button onClick={getData} className='bg-green-400 p-2 rounded active:scale-x-50 text-gray-500 font-bold'>Get Data</button> */}
        <div className='bg-slate-400 p-5 m-2'>
          {data.map((el,idx)=>{
            return <div key={idx} className='bg-yellow-200 text-black flex items-center justify-between w-full px-6 py-6 rounded-md mb-3' >
              <img className='h-40 rounded-sm' src={el.download_url} alt="" />
              <h2>{el.author}</h2>

            </div>
          })}
        </div>
    </div>
  )
}

export default App
