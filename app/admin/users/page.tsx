'use client'
import React from 'react'
import AdminProtected from "../../hooks/adminProtected";
import Heading from "../../utils/Heading";
import AdminSideBar from "../../componenets/admin/AdminSideBar";
import DashboardHero from "../../componenets/admin/DashboardHero";
import AllCourses from "../../componenets/admin/course/AllCourses";
import AllUser from "../../componenets/admin/user/AllUser";

type Props = {}

const Page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Edu-Zone Admin"
                    description="ELearning i sa platform for students to learn and get knowledge"
                    keywords="Programming,React, MERN"
                />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSideBar/>
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero/>
                        {/*<AllCourses/>*/}
                        <AllUser/>
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default Page;