import { Link } from 'react-router-dom';
import './Menubar.css'
function Menubar() {
    return (
        <div className="scrollmenu">
            <div id="myLinks">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Menubar;