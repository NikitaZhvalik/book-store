import BtnBackMain from '../../components/BtnBackMain/BtnBackMain';

import './style.css'

const NotFound = () => {
    return (
        <div className='notFound__container'>
            <h1 className="notFound__title">404 Error</h1>
            <p className="notFound__message">Oops! The page you are looking for could not be found.</p>
            <BtnBackMain />
        </div>
    );
}
 
export default NotFound;