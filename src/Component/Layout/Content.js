import React from 'react';
import { Layout, Breadcrumb, Dropdown} from 'antd';
import { Typography } from 'antd';
import folder from '../../images/folder-man.jpg';
import Dropdowns from '../MinorComponent/Dropdowns';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


function Content() {

    const { Content } = Layout;
  
    const { Title } = Typography;

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <div>
<Layout>
<Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Title style={{color: 'black'}} level={4}>{<Dropdowns/>}</Title></Breadcrumb.Item>
       </Breadcrumb>
      <div style={{background: '#fff', padding: 24, minHeight: 580}}>

    <div style={{marginTop: 35, marginLeft: 330}}>
    <img src={folder} style={{height:400, width: 500}}/>

     <Title style={{color: 'black', marginTop: 20}} level={4}>UPLOAD ALL YOUR FOLDERS AND FILES HERE</Title>  

     <Upload {...props} >
    <Button icon={<UploadOutlined />}style={{marginTop: 10, color: '#d4b106'}}>Click to Upload Folder or File</Button>
  </Upload>
    </div>
     </div>
</Content>
</Layout>    
</div>
    )
}

export default Content
