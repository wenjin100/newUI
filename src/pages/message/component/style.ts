import { css } from '@emotion/css';

const MessageStyle = css`
  position: fixed; /* 固定在页面上 */
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%); /* 居中对齐 */
  z-index: 1000; /* 确保在最前面 */
  padding: 8px 12px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  border-radius: 8px;
  border: 1px solid #ccc;

  &.adm-message-info {
    background-color: #e6f4ff;
    border-color: #91caff;
  }

  &.adm-message-success {
    background-color: #f6ffed;
    border-color: #b7eb8f;
  }

  &.adm-message-error {
    background-color: #fff2f0;
    border-color: #ffccc7;
  }

  &.adm-message-warning {
    background-color: #fffbe6;
    border-color: #ffe58f;
  }

  &.adm-message-show {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  opacity: 0;
`;

export { MessageStyle };
