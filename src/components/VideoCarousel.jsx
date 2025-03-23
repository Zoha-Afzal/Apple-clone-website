import React from 'react'
import { highlightsslides } from '../constants'

const VideoCarousel = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center">
                {highlightsslides.map((List, i) => (
                    <div key={List.id} id='slider'>
                     <div className="video-carousel_container">
                        test
                     </div>
                      
                    </div>
                ))}
            </div>

        </>
    )
}

export default VideoCarousel
