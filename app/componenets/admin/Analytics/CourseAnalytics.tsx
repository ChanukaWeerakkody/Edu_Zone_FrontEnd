import React from 'react'
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Label,
    LabelList, CartesianGrid, Legend, Tooltip,
} from "recharts";
import {styles} from "../../../styles/style";

type Props = {}

const CourseAnalytics = (props: Props) => {
    /*const {data,isLoading} = useGetCourseAnalyticsQuery({});

    const analyticsData = [
        {name: 'Sep 2023',uv:3},
        {name: 'Oct 2023',uv:2},
        {name: 'Nov 2023',uv:5},
        {name: 'Dec 2023',uv:7},
        {name: 'Jan 2024',uv:2},
    ];



    const minValue = 0;

    return (
        <div className="h-screen">
                <div className="mt-[50px]">
                    <h1 className={`${styles.title} px-5 !text-start`}>
                        Course Analytics
                    </h1>
                    <p className={`${styles.label} px-5`}>
                        Last 12 months analytics data{" "}
                    </p>
                </div>

                <div className="w-full h-[90%] flex items-center justify-center">
                    <ResponsiveContainer width="90%" height="50%">
                        <BarChart width={150} height={300} data={analyticsData}>
                            <XAxis dataKey="name">
                                <Label offset={0} position="insideBottom"/>
                            </XAxis>
                            <YAxis domain={[minValue,"auto"]}>
                                <Bar dataKey="uv" fill="#sfaf82">
                                    <LabelList dataKey="uv" position="top"/>
                                </Bar>
                            </YAxis>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
    )*/
    const data = [
        { name: 'Jan', sales: 25 },
        { name: 'Feb', sales: 18 },
        { name: 'Mar', sales: 30 },
        { name: 'Apr', sales: 22 },
        { name: 'May', sales: 35 },
    ];
    return (
        <div className="h-screen">
            <div className="mt-[50px]">
                <h1 className={`${styles.title} px-5 !text-start`}>
                Course Analytics
                </h1>
                <p className={`${styles.label} px-5`}>
                    Last 12 months analytics data{" "}
                </p>
            </div>
            <div className="w-full h-[90%] flex items-center justify-center">
                <ResponsiveContainer width="90%" height="50%">
                    <BarChart
                        width={150} height={300}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CourseAnalytics