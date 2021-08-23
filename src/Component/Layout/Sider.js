import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Menu } from 'antd';
import { HomeTwoTone,
         FolderTwoTone,
         DownloadOutlined,
         StarTwoTone,
         DeleteTwoTone } from '@ant-design/icons';
import { RiUserSharedLine } from 'react-icons/ri';
import { MdAccessTime } from 'react-icons/md';
import { Progress } from 'antd';
import Content from './Content';
import { Divider } from 'antd';



function Sider() {

    const { Sider } = Layout;
  
  const { Title } = Typography;

    return (
        <div>
           

<Layout>
<Sider style={{background: 'white'}}>
  <Menu defaultSelectedKeys={['Home']}
    mode="inline"
   >
    <Menu.Item key='Home' icon={<HomeTwoTone />}>Home</Menu.Item>
    <Menu.Item icon={<FolderTwoTone twoToneColor='#d4b106'/>}>Documents</Menu.Item>
    <Menu.Item icon={<DownloadOutlined />}>Downloads</Menu.Item>
    <Menu.Item icon={<RiUserSharedLine />}>Shared</Menu.Item>
    <Menu.Item icon={<MdAccessTime />}>Recent</Menu.Item>
    <Menu.Item icon={<StarTwoTone twoToneColor='#fadb14'/>}>Starred</Menu.Item>
    <Menu.Item icon={<DeleteTwoTone twoToneColor='#a8071a'/>}>Trash</Menu.Item>
  </Menu>

<div>
<Divider style={{marginTop: 40}}/>

<Title level={5} style={{marginTop:40, marginLeft:50}}>Your Storage</Title>
    <Progress type="circle" percent={0}  style={{marginTop:30, marginLeft:40}}/>
<Title level={5} style={{marginTop:20, marginLeft:50}}>File Manager</Title>
</div>
</Sider>
<Layout>
<Content/>
</Layout> 
</Layout>
 </div>
    )
}

export default Sider
