'use client'
import React, {FC, useState} from "react";
import SideBarProfile from "./SideBarProfile";
import {useLogoutQuery} from "../../../redux/features/auth/authApi";
import {signOut} from "next-auth/react";
import ProfileInfo from "./ProfileInfo";

type Props = {
    user:any
};

const Profile:FC<Props> = ({user}) => {
    const [scroll, setScroll] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [active, setActive] = useState(1);
    const [logout, setLogout] = useState(false);
    const {}= useLogoutQuery(undefined,{
        skip: !logout ? true : false,
    });

    const logOutHandler = () => {
        setLogout(true);
        signOut();
        //redirect("/")
    }

    if(typeof window !== "undefined"){
        window.addEventListener("scroll", () => {
            if(window.scrollY > 85){
                setScroll(true);
            }else{
                setScroll(false);
            }
        });
    }



    return (
        <div className="w-[85%] flex mx-auto">
            <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900  bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-black rounded-[5px] shadow-sm dark:shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]":"top-[30px]"} left-[30px]`}>
                <SideBarProfile
                    user={user}
                    active={active}
                    avatar={avatar}
                    setActive={setActive}
                    logoutHandler={logOutHandler}
                />
            </div>
            {active === 1 && (
                    <div className="w-full h-full bg-transparent mt-[80px]">
                        <ProfileInfo avatar={avatar} user={user}/>
                    </div>

                )}
        </div>
    )
}

export default Profile