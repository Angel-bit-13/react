import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const post = () => {

    const [postDetails,setPostDetails] =useState([])
    const [error,setError] =useState(null)
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                //console.log(response.data)
                setPostDetails(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
    <div>
        <ul>
          {
            postDetails.map((post)=>(
                  <li >{post.title}</li>
            )
            )    
            }
        </ul>
    </div>
  )
}

export default post
