import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav'>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/dashboard">
                <div>Dashboard</div>
            </Link>
            <Link to="/home">
                <div>Home</div>
            </Link>
        </div>
    );
}

export default Nav;