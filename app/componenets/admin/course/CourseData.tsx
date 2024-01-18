import React, {FC} from 'react';
import {styles} from "../../../styles/style";

type Props = {
    benefits: {title: string}[];
    setBenefits: (benefits: {title: string}[]) => void;
    prerequisites: {title: string}[];
    setPrerequisites: (prerequisites: {title: string}[]) => void;
    active: number;
    setActive: (active: number) => void;
};

const CourseData:FC<Props> = ({
        benefits,
        setBenefits,
        prerequisites,
        setPrerequisites,
        active,
        setActive,
    }) => {

    const handleBenefitChange = (index: number, value: any) => {
        const updateBenefits = [...benefits];
        updateBenefits[index].title = value;
        setBenefits(updateBenefits);
    };

    return (
        <div className="w-[80%] m-auto mt-24 block">
            <div>
                <label htmlFor="email" className={`${styles.label} text-[20px]`}>
                    what are the benefits for students in this course?
                </label>
                <br/>
                {
                    benefits.map((benefit:any, index:number) => (
                        <input
                            type="text"
                            key={index}
                           name="benefits"
                            placeholder="you will be able to build a full course"
                            required
                            className={`${styles.input} my-2`}
                            value={benefit.title}
                            onChange={(e) => handleBenefitChange(index, e.target.value)}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default CourseData;