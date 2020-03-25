import React from 'react';
import styles from './index.css';
import { useModal } from '@/hooks/useModal';
import { Button } from 'antd';

export default function() {
  const { show, RenderModal } = useModal();

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div>
        {/* <p>some content...</p> */}
        <Button onClick={show} type="default">
          打开
        </Button>
        <RenderModal
          onOk={() => {
            console.log('ok');
          }}
        >
          <p>这里面的内容将会被渲染到'modal-root'容器里.</p>
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
