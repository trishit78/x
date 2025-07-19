"use client"


import { ImageKitProvider,Image  } from '@imagekit/next'
import React from 'react'


type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

const ImageComponent = ({path,w,h,alt,className,tr}:ImageType) => {

    
  return (
   <ImageKitProvider urlEndpoint={urlEndpoint}>
      <Image 
        src={path}
        width={w}
        height={h}
        alt={alt}
       
      
      />
    </ImageKitProvider>
  )
}

export default ImageComponent