import { css } from '@emotion/css'

const InputClass = css`
  .adm-input {
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    &:focus {
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
      outline: 0;
    }
  }
`
export { InputClass }