import React, { useEffect } from 'react'
import { useMainButton } from '@tma.js/sdk-react';

function MainButton({props}:any) {
    const mainButton = useMainButton()
    useEffect(()=>{
        
    })
    mainButton.setParams({
        text: props.text,
        textColor:props.color
      });
  return (
<>
</>
  )
}

export default MainButton