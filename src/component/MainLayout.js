
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {IoIosNotifications} from 'react-icons/io';
import {AiOutlineDashboard,AiOutlineShoppingCart,AiOutlineUser,AiFillApple,AiOutlineBgColors,} from "react-icons/ai";
import {BiCategory,BiListOl} from 'react-icons/bi';
import {FaBloggerB} from 'react-icons/fa';
import {ImBlog} from 'react-icons/im';
import { Layout, Menu, theme } from 'antd';
import {useNavigate} from "react-router";
import {Outlet} from "react-router-dom";



const { Header, Sider, Content } = Layout;

const MainLayout=()=>{
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="logo">
                    <h2 className="text-white fs-5 text-center py-3 mb-0">
                        <span className="sm-logo">DC</span>
                        <span className="lg-logo">Dev Corner</span>
                    </h2>
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[' ']}
                    onClick = {({key})=>{
                      if(key === "signout"){
                      }else{
                          navigate(key);
                      }
                    }}
                    items={[
                        {
                            key: ' ',
                            icon: <AiOutlineDashboard className="fs-4"/>,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUser className="fs-4"/>,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShoppingCart className="fs-4"/>,
                            label: 'Catalog',
                            children:[
                                {
                                    key: 'product',
                                    icon:<AiOutlineShoppingCart className="fs-4"/> ,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'list-product',
                                    icon:<AiOutlineShoppingCart className="fs-4"/> ,
                                    label: 'Product list',
                                },
                                {
                                    key: 'brand',
                                    icon:<AiFillApple className="fs-4"/> ,
                                    label: 'Brand',
                                },
                                {
                                    key: 'list-brand',
                                    icon:<AiFillApple className="fs-4"/> ,
                                    label: 'Brand list',
                                },
                                {
                                    key: 'category',
                                    icon:<BiCategory className="fs-4"/> ,
                                    label: 'Category',
                                },
                                {
                                    key: 'list-category',
                                    icon:<BiCategory className="fs-4"/> ,
                                    label: 'Category list',
                                },
                                {
                                    key: 'color',
                                    icon:<AiOutlineBgColors className="fs-4"/> ,
                                    label: 'Color',
                                },
                                {
                                    key: 'list-color',
                                    icon:<AiOutlineBgColors className="fs-4"/> ,
                                    label: 'Color list',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <BiListOl className="fs-4"/>,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <FaBloggerB className="fs-4"/>,
                            label: 'Blogs',
                            children:[
                                {
                                    key: 'blog',
                                    icon:<FaBloggerB className="fs-4"/> ,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon:<FaBloggerB className="fs-4"/> ,
                                    label: 'Blog list',
                                },
                                {
                                    key: 'blog-category',
                                    icon:<ImBlog className="fs-4"/> ,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon:<ImBlog className="fs-4"/> ,
                                    label: 'Blog Category List',
                                },
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <BiListOl className="fs-4"/>,
                            label: 'Enquiries',
                        },

                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="d-flex justify-content-between ps-1 pe-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className="d-flex gap-4 align-item-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4"/>
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
                        </div>
                        <div className="d-flex gap-3 align-items-center dropdown ">
                            <div>
                                <img
                                    width={50}
                                    height={50}
                                    src="data:image/jpeg;base64,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" alt=""/>
                            </div>
                            <div  role="button"
                                  id="dropdownMenuLink"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                            >
                                <p className="mb-0">johnwick@gmail.com</p>
                                <h6 className="mb-0 height-auto" >John</h6>
                            </div>
                            <div className="dropdown-menu"
                                 aria-labelledby="dropdownMenuLink" >
                                <li className= "py-2"><a className="dropdown-item" href="#">Action</a></li>
                                <li className= "py-2"><a className="dropdown-item" href="#">Another action</a></li>
                                <li className= "py-2"><a className="dropdown-item" href="#">Something else here</a></li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                        <Outlet/>
                </Content>
            </Layout>
        </Layout>

    )
};
export default MainLayout;