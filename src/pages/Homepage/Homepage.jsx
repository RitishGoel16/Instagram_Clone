import React from 'react'
import { useNavigate } from 'react-router-dom';
import StoryCircle from '../../component/Story/StoryCircle'
import HomeRight from '../../component/HomeRight/HomeRight'
import PostCard from '../../component/Post/PostCard'
// import CreatePostModal from '../../component/Post/CreatePostModal'
const Homepage = () => {
    const navigate = useNavigate();

    const handleTabClick = () => {
        navigate("/story"); // Navigate to the story page
    };
    return (

        <div>
            <div className=' mt-10 flex w-[100%] justify-center'>
                <div className='w-[44%] px-10'>
                    <div className='storyDiv flex space-x-2 p-4 border rounded-md justify-start w-full'>
                        {[1, 1, 11].map((item) => <StoryCircle onClick={handleTabClick} />)}
                    </div>
                    <div className='space-y-10 w-full mt-10'>
                        {[1, 1,1].map((item) => <PostCard/>)}
                    </div>
                </div>
                <div className='w-[35%]'><HomeRight /></div>
            </div>
            
        </div>

    )

}

export default Homepage