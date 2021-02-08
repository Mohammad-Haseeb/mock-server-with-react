import React, { useState, useEffect } from "react"


export default function App() {
  
  
  useEffect(() => {
   async function  Caller() {
       
    let postData=await fetch("api/reminders",{
      method:"post",
      body:JSON.stringify({"title":"booksAI","AuthorName":"Ayan"})
    });
                

       let api=await fetch('api/books');
        let data= await api.json();
        console.log("data : ", data);

       
        // let  dataAfterPost=await postData.json();
        // console.log("POST : ", dataAfterPost );

    }
    Caller();
  }, [])

  return (
    <h1>Hello</h1>
  )
}
