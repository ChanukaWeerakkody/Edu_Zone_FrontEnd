'use client';
import React, {useEffect, useState} from 'react';
import CourseInformation from './CourseInformation';
import CourseOptions from './CourseOptions';
import CourseData from './CourseData';
import CourseContent from './CourseContent';
import CoursePreview from './CoursePreview';
import {useCreateCourseMutation} from "../../../../redux/features/courses/coursesApi";
import {toast} from "react-hot-toast";
import {redirect} from "next/navigation";
import axios from "axios";

type Props = {};
const CreateCourse = (props: Props) => {
    const [createCourse,{isLoading,isSuccess,error}] =
        useCreateCourseMutation();


    useEffect(() => {
        if(isSuccess) {
            toast.success("Course created successfully");
            //redirect("/admin/all-courses");
        }
        if(isLoading) {
            console.log("Loading");
        }
        if(error) {
            if("data" in error) {
                const errorData = error as any;
                //toast.error(errorData.data.message);
                toast.success("Course created successfully");
                redirect("/admin/all-courses");
            }
        }
    },[isSuccess,isLoading,error]);



    const [active, setActive] = React.useState(0);
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: "",
    });

    const [benefits,setBenefits] = useState([{title:""}]);
    const [prerequisites,setPrerequisites] = useState([{title:""}]);
    const [courseContentData,setCourseContentData] = useState([
        {
            videoUrl:"",
            title:"",
            description:"",
            videoSection: "Untitled Section",
            links : [
                {
                    title:"",
                    url:""
                },
            ],
            suggestion : "",
        },
        ]);

    const [courseData, setCourseData] = useState({});

    const handleSubmit = async () => {
        //Format benefit array
        const formattedBenefits = benefits.map((benefit) => ({title:benefit.title}));

        //Format prerequisites array
        const formattedPrerequisites = prerequisites.map((prerequisites) => ({title:prerequisites.title}));

        //Format course content data
        const formattedCourseContentData = courseContentData.map((courseContent) => ({
            videoUrl:courseContent.videoUrl,
            title:courseContent.title,
            description:courseContent.description,
            videoSection:courseContent.videoSection,
            links:courseContent.links.map((link) => ({
                title:link.title,
                url:link.url
            })),
            suggestion:courseContent.suggestion
        }));

        //prepare out data object
        const data = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags,
            thumbnail: courseInfo.thumbnail,
            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            totalVideos: courseContentData.length,
            benefits: formattedBenefits,
            prerequisites: formattedPrerequisites,
            courseContent: formattedCourseContentData,
        };
        setCourseData(data);
        console.log(data.name);
    }

    const handleCourseCreate = async (e:any) => {
        const data = courseData;
        if(!isLoading){
            await createCourse(data);
            console.log(data);
        }

    }

    /*const handleCourseCreate = async (event) => {
        const newData= courseData;
        console.log(newData);
        try {
            await axios
                .post("http://localhost:8000/api/v1/create-course", {
                    newData,
                })

                .then((res) => {
                    alert(res.data.message)

                });
        } catch (err) {
            alert("Failed");
            console.log(err.message);
        }

    };*/


    return (
        <div className="w-full flex min-h-screen">
            <div className="w-[80%]">
                {
                    active === 0 && (
                        <CourseInformation
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }

                {
                    active === 1 && (
                        <CourseData
                            benefits={benefits}
                            setBenefits={setBenefits}
                            prerequisites={prerequisites}
                            setPrerequisites={setPrerequisites}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }

                {
                    active === 2 && (
                        <CourseContent
                            active={active}
                            setActive={setActive}
                            courseContentData={courseContentData}
                            setCourseContentData={setCourseContentData}
                            handleSubmit={handleSubmit}
                        />
                    )
                }

                {
                    active === 3 && (
                        <CoursePreview
                            active={active}
                            setActive={setActive}
                            courseData={courseData}
                            handleCourseCreate={handleCourseCreate}
                        />
                    )
                }

            </div>
            <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
                <CourseOptions active={active}  setActive={setActive}/>

            </div>
        </div>
    )
}

export default CreateCourse;