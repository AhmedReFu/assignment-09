import React from 'react';
import Barchart from '../BarChart/Barchart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='d-flex justify-content-start m-9 p-5 align-items-center'>
            <div >
                <MyLineChart>

                </MyLineChart>
            </div>

            <div>
                <Barchart>

                </Barchart>
            </div>
        </div>
    );
};

export default Dashboard;