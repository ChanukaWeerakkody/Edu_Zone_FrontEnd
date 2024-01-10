'use client'
import React, {FC, useEffect, useRef, useState} from "react";
import {toast} from "react-hot-toast";
import {VscWorkspaceTrusted} from "react-icons/vsc";
import {styles} from "../../styles/style";
import {useSelector} from "react-redux";
import {useActivationMutation} from "../../../redux/features/auth/authApi";

type Props = {
    setRoute: (route:string) => void;
}

type VerifyNumber = {
    "0" :string;
    "1" :string;
    "2" :string;
    "3" :string;
}

const Verification:FC<Props> = ({setRoute}) => {
    const {token} = useSelector((state:any) => state.auth);
    const [activation,{isSuccess,error}] = useActivationMutation();
    const [invalidError, setInvalidError] = useState<boolean>(false);

    /*useEffect(() =>{
        console.log("verify token last"+activation.activation_token);
        console.log("verify code last"+activation.activation_code);
        if(isSuccess){
            toast.success("Account verified successfully");
            setRoute("Login");
            console.log("Success");

        }
        if(error){
            if("data" in error){
                const errorData = error as any;
                toast.error(errorData.data.message);
                setInvalidError(true);
            }
        }
    },)*/

    useEffect(() =>{
        if(isSuccess){
            console.log("Success verify token last  "+activation.activation_token);
            console.log("Success verify code last  "+activation.activation_code);
            toast.success("Account verified successfully");
            setRoute("Login");
            console.log("Success");

        }
        if(error){
            if("data" in error){
                console.log("Error verify token last  "+activation.activation_token);
                console.log("Error verify code last  "+activation.activation_code);
                const errorData = error as any;
                toast.error(errorData.data.message);
                //alert("Email already exists");
            }
        }

    },[isSuccess,error]);

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0:"",
        1:"",
        2:"",
        3:"",
    })
    const verificationHandler = async () => {
       const verificationNumber = Object.values(verifyNumber).join("");
       console.log("Verification to send "+verificationNumber);
       if(verificationNumber.length !== 4){
           setInvalidError(true);
           return;
       }
       await activation({
           activation_token: token,
           activation_Code: verificationNumber

       })

        console.log(verificationNumber);
        console.log(token);

    }
    const handleInputChange = (index:number, value:string) => {
      setInvalidError(false);
      const newVerifyNumber = {...verifyNumber, [index]:value};
      setVerifyNumber(newVerifyNumber);
      console.log("New Verify Number",newVerifyNumber);
      console.log("Old Verify Number",verifyNumber);

      if(value === "" && index >0){
          inputRefs[index -1].current?.focus();
      }else if(value.length === 1 && index < 3){
          inputRefs[index +1].current?.focus();
      }
    }

    return (
        <div>
          <h1 className={`${styles.title}`}>
              Verify your Account
          </h1>
            <br/>
            <div className="w-full flex items-center justify-center mt-2">
                <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
                    <VscWorkspaceTrusted size={40}/>
                </div>
            </div>
            <br/>
            <br/>
            <div className=" m-auto flex items-center justify-around">
                {Object.keys(verifyNumber).map((key,index) => (
                 <input type="number"
                        key={key}
                        ref={inputRefs[index]}
                        className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
                            invalidError
                            ? "shake border-red-500"
                                : "dark:border-white border-[#0000004a]"
                        }`}
                        placeholder=""
                        maxLength={1}
                        value={verifyNumber[key as keyof VerifyNumber]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                 />
                ))}
            </div>
            <br/>
            <br/>
            <div className="w-full flex justify-center">
                <button className={`${styles.button}`}
                    onClick={verificationHandler}
                >
                    Verify OTP
                </button>
            </div>
            <br/>
            <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
                Go back to sign in? <span
                className="text-[#2190ff] pl-1 cursor-pointer"
                onClick={() => setRoute("Login")}
            >
                Sign In
            </span>
            </h5>
        </div>
    );
};

export default Verification