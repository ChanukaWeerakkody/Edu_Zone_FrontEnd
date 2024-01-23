import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {styles} from "../../../styles/style";

type Props = {}

const UserAnalytics = (props: Props) => {
    const data = [
        { name: 'Jan', value: 25 },
        { name: 'Feb', value: 8 },
        { name: 'Mar', value: 40 },
        { name: 'Apr', value: 22 },
        { name: 'May', value: 75 },
        { name: 'Jun', value: 30 },
        { name: 'Jul', value: 60 },
        { name: 'Aug', value: 20 },
        { name: 'Sep', value: 50 },
        { name: 'Oct', value: 10 },
        { name: 'Nov', value: 40 },
        { name: 'Dec', value: 70 },
    ];

    return (
        <div className="h-screen">
            <div className="mt-[50px]">
                <h1 className={`${styles.title} px-5 !text-start`}>
                    User Analytics
                </h1>
                <p className={`${styles.label} px-5`}>
                    Last 12 months analytics data
                </p>
            </div>
            <div className="w-full h-[90%] flex items-center justify-center">
                <ResponsiveContainer width="90%" height="50%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" hide={true} />
                        <YAxis hide={true} />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={5} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default UserAnalytics;
