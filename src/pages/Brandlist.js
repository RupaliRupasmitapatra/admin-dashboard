import React from "react";
import {Table} from "antd";
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

const Brandlist = () =>{
    return(
        <div>
            <h3 className="mb-4 title">Brand list</h3>
            <div>
                <Table columns={column} dataSource={data1} />
            </div>
        </div>
    )
}
export default Brandlist;