import React, { useEffect } from 'react'
import { ClipPageContainer } from '../components/Clip/clip'

export default function Clip() {

  useEffect(()=>{
    const video = document.getElementsByTagName('video')[0];
    const urlParams = new URLSearchParams(window.location.search);
    video.setAttribute('src', `http://localhost/clips/public_html/uploads/videos/${urlParams.get('videoname')}`)    
  },[])

  return (
    <>
      <ClipPageContainer>
        <video className='video' controls autoPlay/>
      </ClipPageContainer>
    </>
  )
}
