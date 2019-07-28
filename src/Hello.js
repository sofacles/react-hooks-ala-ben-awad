import React, { useEffect } from 'react';

export const Hello = () => {
  
  useEffect(() => {
    console.log("inside useEffect");
    return () => {
      console.log("and this is the cleanup function");
    }
  });
    return <div>hello</div>;
}