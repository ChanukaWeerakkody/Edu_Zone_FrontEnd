'use client';
import React from 'react';
import Heading from "../utils/Heading";
import AdminSideBar from "../componenets/admin/AdminSideBar";
import AdminProtected from "../hooks/adminProtected";

type Props ={}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Edu-Zone Admin"
                    description="ELearning i sa platform for students to learn and get knowledge"
                    keywords="Programming,React, MERN"
                />
                <div className="flex h-[200vh]">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSideBar/>
                    </div>
                    <div className="w-[85%]">

                    </div>
                </div>
            </AdminProtected>
        </div>
    );
}

export default page;