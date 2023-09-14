import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import BtnBackMain from "../../common/BtnBackMain/BtnBackMain";
import Loader from "../../common/Loader/Loader";

import "./style.css";

const BookPage = () => {
    const {id} = useParams()
    const [data, setData] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getBook = async () => {
            try {
                const server = `https://www.googleapis.com/books/v1/volumes/${id}`;
                const res = await axios.get(server);
                setData(res?.data);
                setLoading(false)
            }
            catch {
                alert("Server error")
            }
        };
        getBook();
    }, [id]);
    
    return (
        <div>
            {isLoading && <Loader />}
            {data &&
                <div className="bookPage">
                    <div>
                        <img className='bookPage__img' src={data?.volumeInfo?.imageLinks && data?.volumeInfo?.imageLinks?.smallThumbnail} alt={"img " + data?.volumeInfo?.title} />
                    </div>
                    <div className="bookPage__box">
                        <h3 className='bookPage__title'>Title: {data?.volumeInfo?.title}</h3>
                        <p className='bookPage__author'>Author(s): {data?.volumeInfo?.authors}</p>
                        <p className='bookPage__description'>{data?.volumeInfo?.description}</p>
                        <p className='bookPage__categories'>Categories: {data?.volumeInfo?.categories}</p>
                        <BtnBackMain />
                    </div>
                </div>
            }
        </div>
    );
}
 
export default BookPage;