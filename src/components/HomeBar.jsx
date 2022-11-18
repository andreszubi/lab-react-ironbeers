// Create a header to return to the home page

import {Link} from 'react-router-dom'
import  home from '../assets/home.png';

function HomeBar() {
    return (
        <div>
            <Link  to="/"><img className='home-img'
             src={home}
                alt="logo"
                style={{ width: "600px", height: "80px" }}
                />
               </Link>
        </div>
    )
}

export default HomeBar