import React, {useEffect, useState} from 'react'
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button} from '@mui/material';
import {AiOutlineDelete} from "react-icons/ai";
import {useTheme} from "next-themes";
import {FiEdit2} from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import {useDeleteCourseMutation, useGetAllCoursesQuery} from "../../../../redux/features/courses/coursesApi";
import { format } from "timeago.js";

import {styles} from "../../../styles/style";
import {toast} from "react-hot-toast";
import Modal from 'react-modal';
import Link from "next/link";

type Props = {}

const AllCourses = (props: Props) => {
    const {theme,setTheme} = useTheme();
    const [open, setOpen] = useState(false);
    const [courseId, setCourseId] = useState('');
    const {isLoading,data,refetch} = useGetAllCoursesQuery({},{refetchOnMountOrArgChange:true});
    const [deleteCourse,{isSuccess,error}] = useDeleteCourseMutation();

    const columns = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'title', headerName: 'Course title', flex: 1},
        {field: 'ratings', headerName: 'Ratings', flex: .5,},
        {field: 'purchased', headerName: 'Purchased', flex: .5,},
        {field: 'created_at', headerName: 'Created at', flex: 0.5,},
        {
            field: '',
            headerName: 'Edit',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link href={`/admin/edit-course/${params.row.id}`}>
                            <MdEdit
                                className="dark:text-white text-black"
                                size={20}
                            />
                        </Link>
                    </>
                )
            }
        },

        {
            field: ' ',
            headerName: 'Delete',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button
                            onClick={ () => {
                                setOpen(!open);
                                setCourseId(params.row.id);

                            }}
                        >
                            <AiOutlineDelete
                            className="dark:text-white text-black"
                            size={20}
                            />
                        </Button>
                    </>
                )
            }
        }
    ];

    const rows = [
    ]

    {
        data && data.courses.forEach((item: any) => {
            rows.push({
                id: item._id,
                title: item.name,
                ratings: item.ratings,
                purchased: item.purchased,
                created_at: format(item.createdAt),
            })
        })
    }

    useEffect(() => {
        if (isSuccess) {
            setOpen(false);
            refetch();
            toast.error("Course deleted failed!")
        }
        if(error){
            if("data" in error){
                /*const errorData = error as any;
                toast.error(errorData.data.message);*/
                refetch();
                toast.success("Course deleted successfully!")
                setOpen(false);
            }
        }
    }, [isSuccess,error]);

    const handleDelete = async () => {
        const newId = courseId;
        console.log(courseId);
        await deleteCourse(newId);
    }

    return (
        <div className="mt-[120px]">
            {
                isLoading ? (
                    /*<Loader/>*/
                    <div></div>
                ): (
                    <Box m="20px">
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

                        {open && (

                            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500 p-6 bg-white rounded-md">
                                <h1 className={`${styles.title} dark:text-black text-black-600`}>
                                    Are you sure you want to delete this course?
                                </h1>
                                <div className="flex w-full items-center justify-between mt-6">
                                    <div
                                        className={`${styles.button} w-24 h-8 bg-gray-300 border border-gray-500 rounded-md`}
                                        onClick={() => setOpen(!open)}
                                    >
                                        Cancel
                                    </div>
                                    <div
                                        className={`${styles.button} w-24 h-8 bg-red-500 text-white rounded-md border border-red-500`}
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </div>
                                </div>
                            </Box>


                        )

                        }


                    </Box>
                )
            }
        </div>
    )
}

export default AllCourses;