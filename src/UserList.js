import axios from "axios";
import React, {useEffect, useState} from "react";
 const UserList = () => {
     const baseUrl = 'https://jsonplaceholder.typicode.com/users'

    const[listofuser, setlistofuser] = useState([])

  useEffect(()=>{
      axios.get(baseUrl)
      .then((response) => {
        setlistofuser(response.data)
      })
  }, [])
  if (!listofuser) return null
     return(
      <div className='row'>
      {listofuser.map((user, key) =>
        <div user={user} key={key}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
          <h3>{user.username}</h3>
          <h3>{user.profession}</h3>
          <h3>{user.email}</h3>
          <h3>{user.geo}</h3>
          <h3>{user.zipcode}</h3>
          <h3>{user.street}</h3>
          <h3>{user.suite}</h3>
          <h3>{user.website}</h3>
          <h3>{user.company}</h3>
        </div>
      )}
     </div>
     )
 }; export default UserList