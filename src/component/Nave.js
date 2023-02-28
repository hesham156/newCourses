import React from 'react'

const Nave = ({setLogin}) => {
  return (
    <nav className='nave'>
        <div className='container'>
            <div className='logo'></div>
            <div className='lnks'>
                <ul>
                    <li onClick={()=>{setLogin(true)}}>Login</li>
                </ul>
            </div>
        </div> 
    </nav>
  )
}

export default Nave