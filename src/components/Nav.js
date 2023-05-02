import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return(
       <div>
            <img src = "https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=752x"
alt = "" className='logo'/>  
          { auth ?<ul className='nav-ul'>
                <li><Link to = "/">Products</Link></li>
                <li><Link to = "/add"> Add Products</Link></li>

                <li><Link to = "/profile">Profile</Link></li>
                <li> <Link onClick={logout} to = "/signup">Logout({JSON.parse(auth).name})</Link></li>
            </ul>
                :
            <ul className='nav-ul nav-right'>
                <li><Link to ="/signup">SignUp</Link></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
        }
       </div> 
    )
}
export default Nav;


