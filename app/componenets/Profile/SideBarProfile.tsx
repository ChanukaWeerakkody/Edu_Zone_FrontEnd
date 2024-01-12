import React, {FC, useState} from "react";
import Image from "next/image";
import avatarDefault from "../../../public/assests/avatarDefault.png";

type Props = {
    user:any
    active:number
    avatar:string | null
    setActive:(active:number) => void
    logoutHandler:any;
}

const SideBarProfile: FC<Props> = ({user,active,avatar,setActive,logoutHandler}) => {
    return (
        <div className="w-full">
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 1 ? "dark:bg-slate-800 bg-white" :"bg-transparent"
                }`}
            onClick={() => setActive(1)}
            >
                <Image src={user.avatar || avatar ? user.avatar || avatar:avatarDefault}
                       alt=""
                       className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
                />

                <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                    My Account
                </h5>

            </div>
        </div>
    )
}

export default SideBarProfile;