import { useEffect, useState } from "react"


export default  function () {
    const [users,setUsers]=useState([])
    const [usersfilter,setFilter]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))
    },[])


    // useEffect(()=>{
    //     if(users.length>0){
    //         console.log(users)
    //     }
    // },[users])
    // const update=()=> setCounter(prev=>prev+1)
        
    useEffect(()=>{
        setFilter(users)
    },[users])
   const handelchange=(e)=>{
    const filter=users.filter(
        user=>user.name.toLowerCase().includes(e.target.value)
    )
    setFilter(filter)
   }
  return (
    
    <>
    <input type="text" className="search" onInput={handelchange} />
    {/* <h1>{counter}</h1>
    <button onClick={update}></button> */}
    {usersfilter.map(user=><h2 key={user.id}>{user.name}</h2>)}
    </>
  )
}

