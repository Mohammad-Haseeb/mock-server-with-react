import React, { useState, useEffect } from "react"


export default function App() {
  
  
  useEffect(() => {
   async function  Caller() {
        let api=await fetch('api/books');
        let data= await api.json();
        console.log("data : ", data);
    }
    Caller();
  }, [])

  return (
    <h1>Hello</h1>
  )
}
