import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({authenticate,setAuthenticate}) => {
  const navigate = useNavigate();
  const menuList = ['여성','남성','아동','JH Home','Sales','지속가능성']
  const goToLogin=()=>{
    navigate('/login');
  }
  const search =(event)=>{
    if(event.key === "Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className='login-button' onClick={goToLogin}>
        {/* <FontAwesomeIcon icon={faUser} />
        <div>로그인</div> */}
        {authenticate ? (
          <div onClick={()=>setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor: "pointer"}}>로그아웃</span>
          </div>
        ) : (
          <div onClick={()=>navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor: "pointer"}}>로그인</span>
          </div>
        )}
      </div>
      <div className='nav-section'>
        <Link to="/">
          <img width={150} src="jh.png" alt="img" />
        </Link>
        
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
        {menuList.map((menu,index)=>(
          <li key={index}>{menu}</li>
        ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>
      </div>      
    </div>
    
  )
}

export default Navbar;
