"use client"
import { useSession } from "next-auth/react";
import UserLoggedIn from "@/app/components/UserLoggedIn";
import UserLoggedOut from "@/app/components/UserLoggedOut";


const HeaderMenu = ()=> {
  const { data: session } = useSession();
  console.log(session);
  if(session && session.user) {
    return <UserLoggedIn session={session}/>
  }else{
    return <UserLoggedOut/>
  }
}

export default HeaderMenu;
