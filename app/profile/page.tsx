'use client'
import React, { FC, useState } from "react";
import Protected from '../hooks/useProtected'
import Heading from "../utils/Heading";
import Header from "../componenets/Header";
import Profile from "../componenets/Profile/Profile";
import {useSelector} from "react-redux";


type Props = {}

const page:FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const {user} = useSelector((state:any) => state.auth);

    return (
        <div>
            <Protected>
                <Heading
                    title={`${user?.name} profile - Edu-Zone`}
                    description="ELearning is the best platform for learn"
                    keywords="Programming, TReact, MERN"
                />
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />

                <Profile user={user}/>

            </Protected>
        </div>
    )
}

export default page;