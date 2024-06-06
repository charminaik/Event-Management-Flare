import {Link} from "react-router-dom"
import "./style/Navigation.css";
const Navigation = ()=>{
  return (
    <nav>
        <ul>
            <li>
              <Link to="/Homepage">HOME</Link>
            </li>
            <li>
              <Link to="/find-events">FIND EVENTS</Link>
            </li>
            
            <li>
              <Link to="/">LOG OUT</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navigation;