'use client';
import React from 'react';
import AdminSideBar from "../../../componenets/admin/AdminSideBar";
import Heading from "../../../utils/Heading";
import CreateCourse from "../../../componenets/admin/course/CreateCourse";
import DashboardHeader from "../../../componenets/admin/DashboardHeader";
import EditCourse from "../../../componenets/admin/course/EditCourse";

type Props = {};

const page = ({params}:any) => {
    const id = params?.id;
    return (
        <div>
            <Heading
                title="Edu-Zone Admin"
                description="ELearning i sa platform for students to learn and get knowledge"
                keywords="Programming,React, MERN"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSideBar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                   {/* <CreateCourse />*/}
                    <EditCourse id={id}/>
                </div>
            </div>
        </div>
    )
}

export default page;