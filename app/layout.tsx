'use client'

import './globals.css'
import {Poppins} from "next/font/google";
import {Josefin_Sans} from "next/font/google"
import {ThemeProvider} from "./utils/theme-provider"
import {Providers} from "./Provider"
import {Toaster} from "react-hot-toast";
import {SessionProvider} from "next-auth/react";
import React from "react";
import {useLoadUserQuery} from "../redux/features/api/apiSlice";
import Loader from "./componenets/Loader/Loader";


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>

         <Providers>
             <SessionProvider>
                 <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                     {/*<Custom>{children}</Custom>*/}
                     {children}
                     <Toaster position="top-center" reverseOrder={false}/>
                 </ThemeProvider>
             </SessionProvider>


         </Providers>

      </body>
    </html>
  )
}

const Custom:React.FC<{children:React.ReactNode}> = ({children}) =>{
    const {isLoading} = useLoadUserQuery({});
    return(
        <>
            {
                isLoading ? <Loader/> : <>{children}</>
            }
        </>
    )
}
