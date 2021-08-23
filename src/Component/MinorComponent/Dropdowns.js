import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { RiFolderUploadLine } from 'react-icons/ri';
import { RiFileUploadLine } from 'react-icons/ri';
import { AiOutlineFileWord } from 'react-icons/ai';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FaRegFilePowerpoint } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';

function Dropdowns() {

  const menu = (
    <Menu style={{height: 350, width: 300}}>
      <Menu.Item key="0" icon={<AiOutlineFolderAdd/>} style={{marginTop: 10, marginLeft: 20}}>
        New Folder
      </Menu.Item>

      <Menu.Divider style={{marginTop: 20}}/>

      <Menu.Item key="2" icon={<RiFolderUploadLine/>} style={{marginTop: 10, marginLeft: 20}}>
        Upload Folder
      </Menu.Item>
      <Menu.Item key="3" icon={<RiFileUploadLine/>} style={{marginTop: 10, marginLeft: 20}}>Upload File</Menu.Item>

      <Menu.Divider style={{marginTop: 20}}/>
      
      <Menu.Item key="5" icon={<AiOutlineFileWord/>} style={{marginTop: 10, marginLeft: 20}}>Word Document</Menu.Item>
      <Menu.Item key="6" icon={<SiMicrosoftexcel/>} style={{marginTop: 10, marginLeft: 20}}>Spreadsheet</Menu.Item>
      <Menu.Item key="7" icon={<FaRegFilePowerpoint/>} style={{marginTop: 10, marginLeft: 20}}>Powerpoint</Menu.Item>
      <Menu.Item key="8" icon={<AiOutlineFilePdf/>} style={{marginTop: 10, marginLeft: 20}}>Pdf</Menu.Item>
    </Menu>
  );
         
return (
        <div>
           <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      MY DRIVE <DownOutlined />
    </a>
  </Dropdown>
        </div>
    );
}

export default Dropdowns;
