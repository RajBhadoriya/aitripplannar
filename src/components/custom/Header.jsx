import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import {Link } from 'react-router-dom'


// import MyTrips from "@/my-trips";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const [openDailog, setOpenDailog] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    console.log(user);
  }, []);

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        window.location.reload();
      });
  };
 

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
     <a href="/"><img src="logo.svg"   alt="logo"  /></a>
     {/* className="h-15 w-20 rounded-full" */}
     
      <div>
        {user ? (
          <div className="flex items-center gap-3">
          <a href='/create-trip'>
          <Button variant="outline" className="rounded-full">+ Create Trip</Button>
          </a>
          <a href='/my-trips'>
          <Button variant="outline" className="rounded-full">My Trips</Button>
          </a>
          <Popover>
            <PopoverTrigger>
            <img src={user?.picture} className="h-[35px] w-[35px] rounded-full"/>
            </PopoverTrigger>
            <PopoverContent>
              <h2 className="cursor-pointer" onClick={()=>{
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>Logout</h2>
            </PopoverContent>
          </Popover>

        </div>
        ) : (
          <Button onClick={()=>setOpenDailog(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
