import React from 'react';
import styles from './index.css';
import { useModal } from '@/hooks/useModal';
import { Button, Select, Input } from 'antd';

export default function() {
  const { show, RenderModal } = useModal();
  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue="http://" style={{ width: 90 }}>
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div>
        {/* <p>some content...</p> */}
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue="mysite"
          style={{ width: 200 }}
        />
        <Button onClick={show} type="default">
          打开
        </Button>
        <RenderModal
          onOk={() => {
            console.log('ok');
          }}
        >
          <p>这里面的内容将会被渲染到`modal-root`容器里.</p>
        </RenderModal>
      </div>
      <div id="modal-root" />

      {/* <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul> */}
    </div>
  );
}
