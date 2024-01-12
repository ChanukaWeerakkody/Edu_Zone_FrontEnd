import {redirect} from "next/navigation";
import userAuth from "./userAuth";
import React from "react";

interface ProtectedProp{
    children:React.ReactNode;
}
export default function useProtected({children}:ProtectedProp){ {
    const isAuthenticated = userAuth();

    return isAuthenticated ? children : redirect('/')
}
}