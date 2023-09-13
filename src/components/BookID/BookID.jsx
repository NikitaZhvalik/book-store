import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnBackMain from "../BtnBackMain/BtnBackMain";

import "./style.css";

const BookDescr = () => {
    const {id} = useParams()

    const [data, setData] = useState('') //todo переписать на redux

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => {
            if (response.ok  !== true) {
                throw Error ('Не получается загрузить данные с сервера(')
            }
            return response.json();
        })
        .then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.warn(err.message)
        }) 
    }, [])
         
    return (
        <div className="wrapper bookPage__wrapper">
            <div>
                <img className='bookPage__img' src={data?.volumeInfo?.imageLinks && data?.volumeInfo?.imageLinks?.smallThumbnail} alt={"img " + data?.volumeInfo?.title} />
            </div>
            <div className="bookPage-box">
                <h3 className='bookPage__title'>Title: {data?.volumeInfo?.title}</h3>
                <p className='bookPage__author'>Author(s): {data?.volumeInfo?.authors}</p>
                <p className='bookPage__description'>{data?.volumeInfo?.description}</p>
                <p className='bookPage__categories'>Categories: {data?.volumeInfo?.categories}</p>
                <BtnBackMain />
            </div>
        </div>
    );
}
 
export default BookDescr;