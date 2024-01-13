import React, {FC, useEffect, useState} from "react";
import Image from "next/image";
import {AiOutlineCamera} from "react-icons/ai";
import avatarDefault from "../../../public/assests/avatarDefault.png";
import {styles} from "../../styles/style";
import {useUpdateAvatarMutation} from "../../../redux/features/user/userApi";
import {useLoadUserQuery} from "../../../redux/features/api/apiSlice";

interface Props {
    user:any
    avatar:string | null
}

const ProfileInfo:FC<Props> = ({avatar,user}) => {
    const [name, setName] = useState(user && user.name);
    const [updateAvatar,{isSuccess,error}] =useUpdateAvatarMutation();
    const [loadUser,setLoadUser] = useState(false);
    const {} = useLoadUserQuery(undefined,{skip:loadUser ? false : true});

    const imageHandler = async (e:any) =>{
        /*const fileReader = new FileReader();

        fileReader.onload = () =>{
            if(fileReader.readyState === 2){
                const avatar = fileReader.result;
                updateAvatar({
                    avatar
                });
            }
        }
        fileReader.readAsDataURL(e.target.files[0]);*/
        console.log("Image handler")
    }

    /*useEffect(() => {
        if(isSuccess){
            setLoadUser(true);
        }
        if(error){
            console.log(error);
        }
    },[isSuccess,error])*/

    const handleSubmit = async (e:any) =>{
        console.log("Submit")
    }

    return (
        <>
        <div className="w-full flex justify-center mt-10">
            <div className="relative">
               {/* <Image
                    src={user.avatar || avatar ? user.avatar || avatar:avatarDefault}
                    alt=""
                    className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                />*/}
                <Image
                    src={user && user.avatar ? user.avatar : avatar || avatarDefault}
                    alt=""
                    className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                />
                <input
                    type="file"
                    name=""
                    id="avatar"
                    className="hidden"
                    onChange={imageHandler}
                    accept="image/png,image/jpg,image/jpeg,image/webp"
                />
               <label htmlFor="avatar">
                   <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute top-20 left-2 flex items-center justify-center cursor-pointer">
                       <AiOutlineCamera size={20} className="z-1" />
                   </div>
               </label>
                <br/><br/>

            </div>
            <br/>
            <br/>
            <div className=" pl-6 800px:pl-10 h-[30%] mt-10">
                <form
                    className="mr-10"

                    onSubmit={handleSubmit}>
                    <div className="1000px:w-[100%] block pb-4 mr-10">
                        <div className="w-[100%]">
                            <label className="block pb-2">Full Name</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-[100%] pt-2">
                            <label className="block pb-2">Email Address</label>
                            <input
                                type="text"
                                readOnly
                                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                                required
                                value={user?.email}
                            />
                        </div>
                        <input
                            className={`w-full 800px:w-[250px] h-[40px] border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
                            type="submit"
                            value="Update"
                            required
                        />
                    </div>
                </form>
                <br/>
            </div>

        </div>

        </>
    );
}

export default ProfileInfo;