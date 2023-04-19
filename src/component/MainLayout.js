
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
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZ0IPl16VPnGVeXMM3YYel58VGTJe2hQb5Q&usqp=CAU" alt=""/>
                            </div>
                            <div  role="button"
                                  id="dropdownMenuLink"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                            >
                                <p className="mb-0">navdeeppadhiya753@gmailcom</p>
                                <h6 className="mb-0 height-auto" >Navdeep</h6>
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