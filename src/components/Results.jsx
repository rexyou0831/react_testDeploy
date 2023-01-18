import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaSearch, FaFilter } from "react-icons/fa";
import ResponseList from './ResponseList';

const Results = () => {

    const [ responseData, setresponseData ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);

    useEffect(()=>{

        axios.get(`http://samplesearchdatabase-env.eba-v3ihuwv4.ap-southeast-1.elasticbeanstalk.com/api/?page=${ page }`)
        .then(response=>{
            
            if(response.status !== 200){ alert("API GG Detsu!") }

            console.log(response.data.users);

            setPage(response.data.users.current_page);
            setTotalPage(response.data.users.last_page);
            setresponseData(prev => [...prev, ...response.data.users.data]);

        })
        .catch(error=>{ alert(error) });

    }, [ page ]);

    const handleScroll = () => {
        
        const height = document.documentElement.scrollHeight;
        const top = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if(windowHeight + top + 1 >= height){
            setPage(prev => prev + 1);
        }

    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className=' w-5/6 mx-auto mt-10'>
            
            <ResponseList responseData={responseData}/>

            <div className=' fixed w-12 h-12 bg-black bottom-44 right-0 rounded-tl-lg rounded-bl-lg text-white flex items-center justify-center'>
                <FaSearch className='text-2xl' />
            </div>

            <div className=' fixed w-12 h-12 bg-black bottom-28 right-0 rounded-tl-lg rounded-bl-lg text-white flex items-center justify-center'>
                <FaFilter className='text-2xl' />
            </div>

            <div className=' fixed w-12 h-24 bg-black bottom-0 right-0 rounded-tl-lg text-white flex flex-col text-center text-md items-center justify-center'>
                <span>{ page }</span>
                <span>----</span>
                <span>{ totalPage }</span>
            </div>
        </div>
    )
}

export default Results