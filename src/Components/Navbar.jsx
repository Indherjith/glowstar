import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [show,setShow] = useState(true)

  return (
    <div className='nav'>
        <div className="logo">
            <img src="https://th.bing.com/th/id/OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        </div>
        <div className="normal">
            <Link to={"/"} className='Link'>Home</Link>
            <Link to={"/products"} className='Link'>Product</Link>
            <Link to={"/about"} className='Link'>About</Link>
        </div>
        <div className="user">
            <div className="username">Buvaneswaran S</div>
        </div>
        {show?<button className="menu" onClick={()=>setShow(!show)}><img src="https://openclipart.org/image/800px/321014" alt="" /></button>:
        <div className="small">
            <button className="close" onClick={()=>setShow(!show)}><img src="https://th.bing.com/th/id/OIP.MvR8H4voNgN7Ej9WWRO8tgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></button>
            <div className="username1">UserName</div>
            <div className="Links">
                <Link onClick={()=>setShow(!show)} to={"/"} className='Link'>Home</Link>
                <Link onClick={()=>setShow(!show)} to={"/products"} className='Link'>Product</Link>
                <Link onClick={()=>setShow(!show)} to={"/about"} className='Link'>About</Link>
            </div>
        </div>
        }
    </div>
  )
}

export default Navbar