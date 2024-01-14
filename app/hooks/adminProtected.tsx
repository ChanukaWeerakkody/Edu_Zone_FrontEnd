import {redirect} from "next/navigation";
import React from "react";
import {useSelector} from "react-redux";

interface ProtectedProp{
    children:React.ReactNode;
}
export default function AdminProtected({children}:ProtectedProp){ {
   const {user} = useSelector((state:any) => state.auth);
   const isAdmin = user?.role === "admin";

    return isAdmin ? children : redirect('/')
}
}