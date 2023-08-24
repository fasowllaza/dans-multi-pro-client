import React, { useEffect } from 'react';
import Container from '../components/Container';

const Recruitment = () => {
    useEffect(() =>{
    },[])
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='col-span-2 py-2 px-2'><p1 className="font-semibold">Job Description</p1></div>
                <div className='col-span-2 py-2 px-2'><h1>SAD</h1></div>
                <div className='col-span-2 py-2 px-2'><h1>SAD</h1></div>
            </div>
        </Container>
    )
}

export default Recruitment