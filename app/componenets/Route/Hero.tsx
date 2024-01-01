import Image from "next/image";
import Link from "next/link";
import React ,{FC} from "react";
import {BiSearch} from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (Props) => {
    return(
        <div className="w-full 1000px:flex items-center">
            <div className="ml-10 relative top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px;w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full overflow-hidden mx-10">
                <div className="flex items-center justify-center h-full pt-[70px] 1000px:pt-0 z-10">
                    <div className="rounded-full overflow-hidden">
                        <img
                            src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
                            alt=""
                            className="object-contain max-w-[90%] w-[90%] max-h-[100%] h-[auto] z-[10]"
                        />
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="ml-20 dark:text-[#edfff4] text-[#000000ac] font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
                <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60]">
                    Improve your Online Learning Experience Better Instantly
                </h2>
                <br />
                <p className="dark:text-[#edfff4] text-[#000000ac] font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
                    We have 10K+ students from all over the world. Find your desired course and start learning.
                </p>
                <br />
                <br />
                <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                    <input
                        type="search"
                        placeholder="Search your course...."
                        className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                    />
                    <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                        <BiSearch className="text-white" size={30} />
                    </div>
                </div>
                <br />
                <br />
                <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
                    <img src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg"
                         alt=""
                         className="rounded-full"
                    />
                    <img src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
                         alt=""
                         className="rounded-full ml-[-20px]"
                    />
                    <img src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
                         alt=""
                         className="rounded-full ml-[-20px]"
                    />
                    <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                        50K+Students already trusted us...{""}
                        <Link
                            href="/courses"
                            className="dark:text-[#46e256] text-[crimson]"
                        >
                            View Courses
                        </Link>{""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;












