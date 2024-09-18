import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/appConfigSlice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
    const dispatch = useDispatch();
    dispatch(closeMenu());

    let [searchParams] = useSearchParams();
    const videoId = searchParams.get('v')
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    return (
        <div className='relative w-full max-w-[800px] lg:max-w-[900px] xl:max-w-[1200px] overflow-hidden pb-[56.25%] lg:mr-[400px]'>
            <iframe className='absolute top-0 left-0 w-full h-full'
            src={videoUrl}
             title="YouTube video player"  
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default Watchpage