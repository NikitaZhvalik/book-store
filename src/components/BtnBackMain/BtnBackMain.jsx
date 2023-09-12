import { Link } from 'react-router-dom';

import './style.css';

const BtnBackMain = () => {
    return (
        <Link to={"/"}>
            <button className="btn">
                Back to main
            </button>
        </Link>
    );
}
 
export default BtnBackMain;