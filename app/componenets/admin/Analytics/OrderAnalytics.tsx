import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {styles} from "../../../styles/style";

const OrderAnalytics = () => {
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
                    Order Analytics
                </h1>
                <p className={`${styles.label} px-5`}>
                    Last 12 months analytics data{" "}
                </p>
            </div>
            <div className="w-full h-[90%] flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}  width={150} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OrderAnalytics;
