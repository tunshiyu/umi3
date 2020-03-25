import React, { useState } from 'react';

import { Modal } from 'antd';

// Modal组件最基础的两个事件，show/hide
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children, onOk }: { children: React.ReactChild; onOk: () => void }) => (
    <React.Fragment>
      {
        <Modal
          visible={isVisible}
          onCancel={hide}
          onOk={() => {
            hide();
            onOk();
          }}
        >
          {children}
        </Modal>
      }
    </React.Fragment>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
