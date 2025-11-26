import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () => {
  const [userDetails,setUserDetails] =useState()
  const [error,setError] =useState(null)

  useEffect(()=>{

    const fetchData= async()=>{
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        //console.log(response.data)
        setUserDetails(response.data)

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
            userDetails.map((user)=>(
                  <li >{user.name}</li>
            )


            )

          }
        </ul>

    </div>
  )
}


export default Users