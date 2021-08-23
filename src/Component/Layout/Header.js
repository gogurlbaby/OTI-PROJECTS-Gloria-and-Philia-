import React from 'react';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Header() {

    const { Header } = Layout;
  
    const { Title } = Typography;

    return (
        <div>
<Layout>
<Header style={{background: '#ad8b00', padding:10}}>
<Avatar style={{float:'right'}} icon={<UserOutlined />} />
<Title style={{color: 'white'}} level={3}>OTI DRIVE</Title>
</Header>
</Layout>
</div>
    )
}

export default Header
