import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Paper, IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'

function SearchBar() {

  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(searchTerm)
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

    
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    // sx={{borderRadius:20,border:'1px solid #e3e3e3', pl:2,boxShadow:'none', mr:{sm:5} }}
    sx={{borderRadius:20,border:'1px solid #e3e3e3',py:1,px:2,boxShadow:'none', mr:{sm:5} , display:'flex'}}


    
    >

        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type="submit" sx={{p:'10px', color:'red',paddingRight:'9px' }}/>
        <Search />
    </Paper>
  )
}

export default SearchBar