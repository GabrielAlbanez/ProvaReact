import React from 'react'
import Baner from '../components/Baner'
import { HiHome,HiUserCircle,HiOutlineCog } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Perfil() {
    return (
        <div style={{display:"flex"}}>
            <div className='divIcon' style={{backgroundColor:"#000000",width:"50px",height:"100vh"}}>
            <ul style={{display:"flex",gap:"40px",flexDirection:"column" , alignItems:"center",color:"white",paddingTop:"90px",listStyleType:"none"}}>
                <li>
                    <Link to="/" style={{color:"white"}}>
                    <HiHome/>
                    </Link>
                    </li>
                <li>
                    <Link to="/Perfil" style={{color:"white"}}>
                    <HiUserCircle />
                    </Link></li>
    
    
                <li>
                    <Link to="/Config" style={{color:"white"}}>
                    <HiOutlineCog/>
                    </Link>
                    
                    </li>
            </ul>
        </div>
            <div>
                <Baner/>
            <div style={{display:"flex" , flexDirection:"column",gap:"200px"}}>
                <div style={{display:"flex",alignItems:"center", justifyContent:"center",paddingTop:"30px"}}>
                <h1>Atuazar Usuario </h1>
                </div>
                <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
                 <div >
                    <form style={{display:"flex" , flexDirection:"column",gap:"40px"}}>
                        <div>
                    <label htmlFor="">nome:</label>
                    <input type="text"/>
                    </div>
                    <div>
                    <label htmlFor="">Email:</label>
                    <input type="text"/>
                    </div>
                    <div>
                    <label htmlFor="">Senha:</label>
                    <input type="text"/>
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px"}}>
                        <button>salvar</button>
                        <button>voltar</button>
                    </div>
                    </form>
                 </div>
                </div>
                </div>
                
                </div>
        </div>
        
      )
}
