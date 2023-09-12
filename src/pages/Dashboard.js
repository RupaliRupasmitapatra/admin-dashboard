import React from "react";
import {BsArrowDownRight,} from "react-icons/bs";
import { Column } from '@ant-design/plots';
import {Table} from 'antd';
import { Calendar } from 'antd';
// BsArrowUpRight

const column = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const Dashboard =()=>{
    const data = [
        {
            type: 'Jan',
            sales: 38,
        },
        {
            type: 'Feb',
            sales: 52,
        },
        {
            type: 'Mar',
            sales: 61,
        },
        {
            type: 'Apr',
            sales: 145,
        },
        {
            type: 'May',
            sales: 48,
        },
        {
            type: 'June',
            sales: 38,
        },
        {
            type: 'July',
            sales: 38,
        },
        {
            type: 'Aug',
            sales: 38,
        },
        {
            type: 'Sep',
            sales: 38,
        },
        {
            type: 'Oct',
            sales: 38,
        },
        {
            type: 'Nov',
            sales: 38,
        },
        {
            type: 'Dec',
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return "#ffd333";
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Months',
            },
            sales: {
                alias: 'Income',
            },
        },
    }

    return(
        <div>
            <h3 className="mb-4 title">Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="blue">
                            <BsArrowDownRight/>32%</h6>
                        <p className="mb-0 desc" >Compared To April 2022</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red">
                            <BsArrowDownRight/>32%</h6>
                        <p className="mb-0 desc">Compared To April 2022</p>
                    </div>

                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="green">
                            <BsArrowDownRight/>32%</h6>
                        <p className="mb-0">Compared To April 2022</p>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2 justify-content-between">
                <div className="mt-4 w- flex-grow-1">
                    <h3 className="mb-4 title">Income Statics</h3>
                    <div><Column {...config} />
                    </div>
                </div>
                <div className="mt-4 w-30 flex-grow-1">
                    <h3 className="mb-4 title">Recent Orders</h3>
                    <div>
                        <Table columns={column} dataSource={data1} />
                    </div>
                </div>
                <div
                    className="mt-4 w-30 flex-grow-1"style={{
                    display: 'block', width:400,height:200,padding: 20
                }}>
                    <h3 className="mb-4 title">Calendar</h3>
                    <div><Calendar onChange={(value) => {
                        alert(`Your selected ${value.format('YYYY-MM-DD')}`)
                    }} /></div>
                </div>
            </div>

        </div>

    )
};
export default Dashboard;