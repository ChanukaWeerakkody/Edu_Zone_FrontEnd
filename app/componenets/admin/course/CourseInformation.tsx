import React, {FC, useState} from 'react'
import {styles} from "../../../styles/style";

type Props = {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    active: number;
    setActive: (active: number) => void;
}

const CourseInformation:FC<Props> = ({courseInfo,setCourseInfo,active,setActive}) => {
    const [dragging, setDragging] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setActive(active + 1);
    };

    return (
        <div className="w-[80%] m-auto mt-24">
            <form onSubmit={handleSubmit} className={`${styles.label}`}>
                <div>
                    <label htmlFor="">
                        Course Name
                    </label>
                    <input
                        type="name"
                        name=""
                        required
                        value={courseInfo.name}
                        onChange={(e:any) =>

                            setCourseInfo({...courseInfo, name: e.target.value})
                        }
                        id="name"
                        placeholder="Mern Stack LMS"
                        className={`${styles.input}`}
                    />
                </div>
                <br/>
                <div className="mb-5">
                    <label className={`${styles.label}`}>Course Description</label>
                    <textarea name="" id="" cols={30} rows={8}
                        placeholder="Write description about course"
                              className={`${styles.input} !h-min !py-2`}
                              value={courseInfo.description}
                              onChange={(e:any) =>
                                  setCourseInfo({...courseInfo, description: e.target.value})
                              }
                    >

                    </textarea>
                </div>
                <br/>
                <div className="w-full flex justify-between">
                    <div className="w-[45%]">
                        <label className={`${styles.label}`}>Course Price</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={courseInfo.price}
                            onChange={(e:any) =>
                                setCourseInfo({...courseInfo, price: e.target.value})
                            }
                            id="price"
                            placeholder="100"
                            className={`${styles.input}`}
                        />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CourseInformation;