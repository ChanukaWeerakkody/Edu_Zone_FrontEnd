import React, {FC, useState} from 'react'
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button} from '@mui/material';
import {AiOutlineDelete} from "react-icons/ai";
import {useTheme} from "next-themes";
import { AiOutlineMail } from "react-icons/ai";
import { format } from "timeago.js";
import {useGetAllUsersQuery} from "../../../../redux/features/user/userApi";
import Link from "next/link";
import {styles} from "../../../styles/style";


type Props = {
    isTeam: boolean
}

const AllUser:FC<Props> = ({isTeam}) => {
    const [active, setActive] = useState(false);
    const {theme,setTheme} = useTheme();
    const {isLoading,data,error} = useGetAllUsersQuery({});

    const columns = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'name', headerName: 'Name', flex: .5},
        {field: 'email', headerName: 'Email', flex: .5,},
        {field: 'role', headerName: 'Role', flex: .5,},
        {field: 'courses', headerName: 'Purchased Courses', flex: 0.5,},
        {field: 'created_at', headerName: 'Joined at', flex: 0.5,},

        {
            field: ' ',
            headerName: 'Delete',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button>
                            <AiOutlineDelete
                                className="dark:text-white text-black"
                                size={20}
                            />
                        </Button>
                    </>
                )
            }
        },
        {
            field: '',
            headerName: 'Email',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <a
                            href={`mailto:${params.row.email}`}


                        >
                            <AiOutlineMail
                                className="dark:text-white text-black"
                                size={20}
                            />

                        </a>
                    </>
                )
            }
        }
    ];

    const rows = []

    if(isTeam){
        const newData = data && data.users.filter((item: any) =>  item.role === "admin");
        newData &&
        newData.forEach((item: any) => {
            rows.push({
                id: item._id,
                name: item.name,
                email: item.email,
                role: item.role,
                courses: item.courses.length,
                created_at: format(item.createdAt),
            })
        })
    }else {
        data && data.users.forEach((item: any) => {
            rows.push({
                id: item._id,
                name: item.name,
                email: item.email,
                role: item.role,
                courses: item.courses.length,
                created_at: format(item.createdAt),
            })
        })
    }

    return (
        <div className="mt-[120px]">
            {
                isLoading ? (
                    /*<Loader/>*/
                    <div></div>
                ): (
                    <Box m="20px">
                        <div className="w-full flex justify-end">
                            <div className={`${styles.button} !w-[200px] dark:bg-[#57c7a3] !h-[35px] dark:border dark:border-[#ffffff6c]`}
                                onClick={() => setActive(!active)}
                            >
                                Add new Member
                            </div>
                        </div>
                        <Box m="40px 0 0 0"
                             height="80vh"
                             sx={{
                                 "& .MuiDataGrid-root": {
                                     border: "none",
                                     outline: "none",
                                 },
                                 "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiDataGrid-sortIcon": {
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiDataGrid-row": {
                                     color: theme === "dark" ? "white" : "black",
                                     borderBottom: theme === "dark"
                                         ? "1px solid #ffffff30!important"
                                         : "1px solid #ccc!important",
                                 },
                                 "& .MuiTablePagination-root": {
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiDataGrid-cell": {
                                     borderBottom:"none",
                                 },
                                 "& .name-column-cell": {
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiDataGrid-columnHeaders": {
                                     backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                     borderBottom: "none",
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiDataGrid-virtualScroller": {
                                     backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
                                 },
                                 "& .MuiDataGrid-footerContainer": {
                                     borderTop: "none",
                                     backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                     color: theme === "dark" ? "white" : "black",
                                 },
                                 "& .MuiCheckbox-root": {
                                     color: theme === "dark" ? "#b7ebde !important" : "black !important",
                                 },
                                 "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                     color:`#fff !important`
                                 },
                             }}
                        >
                            <DataGrid checkboxSelection columns={columns} rows={rows}/>
                        </Box>

                    </Box>
                )
            }
        </div>
    )
}

export default AllUser;