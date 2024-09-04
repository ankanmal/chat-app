'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react"

export default function Home() {
  const[messages, setMessages]= useState("");

  const getMessagesApi= async ()=>{
    const data= await fetch('/api/get-messages');
    const posts= await data.json()
    setMessages(posts.message)
  }

return(
  <>
  <div>The Landing Page</div>
  <Button onClick={(e)=>getMessagesApi()}>Get Messages</Button>
  <h2>The Messages Are</h2>
  <div>{messages}</div>
  </>
)
}
