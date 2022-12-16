import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

interface Props {
    children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                Hello
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>MainLayout</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default MainLayout;