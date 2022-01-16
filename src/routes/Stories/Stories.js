import React, { useEffect, useState } from 'react'
import StoryList from '../../components/StoryList/StoryList'
const Stories = () => {
    const [stories, setStories] = useState(null);
    const [loading, setLoading] = useState(false);


    const getStories = async () => {
       const res = await fetch(`http://localhost:3000/stories`);
        return await res.json();
    }

    useEffect(() => {
        getStories().then((data) => setStories(data))
      }, [])

    return (
        
        <div>
         { loading ? <div>Loading...</div> : <StoryList sList={stories} /> }
        </div>
    )
}

export default Stories
