import React from 'react'
import { Layout, Breadcrumb} from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, 
         HomeTwoTone, 
         FolderTwoTone, 
         DownCircleTwoTone, 
         PlayCircleTwoTone, 
         PictureTwoTone,
         VideoCameraTwoTone, 
         DeleteTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { Progress } from 'antd';

function FileManagement() {

  const { Header, Sider, Content } = Layout;
  
  const { Title } = Typography;

  // const { SubMenu } = Menu;
   
  return (
    <div>
<Layout>
<Header style={{background: '#876800', padding:10}}>
<Avatar style={{float:'right'}} icon={<UserOutlined />} />
<Title style={{color: 'white'}} level={3}>OTI FILES</Title>
</Header>
<Layout>
<Sider style={{background: 'white'}}>
  <Menu defaultSelectedKeys={['Dashboard']}
    mode="inline"
   >
    <Menu.Item key='Dashboard'>
     Dashboard</Menu.Item>
    {/* <Menu.Item icon={<HomeTwoTone />}>Home</Menu.Item> */}
    <Menu.Item icon={<FolderTwoTone />}>Documents</Menu.Item>
    <Menu.Item icon={<DownCircleTwoTone />}>Downloads</Menu.Item>
    <Menu.Item icon={<PlayCircleTwoTone />}>Music</Menu.Item>
    <Menu.Item icon={<PictureTwoTone />}>Pictures</Menu.Item>
    <Menu.Item icon={<VideoCameraTwoTone />}>Videos</Menu.Item>
    {/* <Menu.Item icon={<PictureTwoTone />}>Recent</Menu.Item> */}
    <Menu.Item icon={<DeleteTwoTone />}>Trash</Menu.Item>
  </Menu>

<div>
<Title level={5} style={{marginTop:70, marginLeft:50}}>Your Storage</Title>
    <Progress type="circle" percent={0}  style={{marginTop:30, marginLeft:40}}/>
<Title level={5} style={{marginTop:20, marginLeft:50}}>File Manager</Title>
</div>
</Sider>
<Layout>
<Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
       </Breadcrumb>
      <div style={{background: '#fff', padding: 24, minHeight: 580}}>Content</div>
    </Content>
</Layout>
</Layout>
</Layout>
</div>
  )
}

export default FileManagement
