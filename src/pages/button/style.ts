import { css } from '@emotion/css'

const ButtonClass = css`
  display: inline-block;
  .adm-button {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 6px 12px;
    margin: 0;
    line-height: 1.4;
    text-align: center;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 4px;
    cursor: pointer;
    color: #333;
    background-color: #fff;
    transition: opacity 0.15s ease;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(calc(1px * -1), calc(1px * -1));
      width: 100%;
      height: 100%;
      background-color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      opacity: 0;
      content: ' ';
      box-sizing: content-box;
    }

    &:active::before {
      opacity: 0.08;
    }
    &-primary {
      background-color: #1677ff;
      color: #fff;
    }

    &-success {
      background-color: #00b578;
      color: #fff;
    }

    &-danger {
      background-color: #ff3141;
      color: #fff;
    }

    &-warning {
      background-color: #ff8f1f;
      color: #fff;
    }

      &-mini {
      padding-top: 3px;
      padding-bottom: 3px;
      font-size: 13px;
    }

    &-small {
      padding-top: 3px;
      padding-bottom: 3px;
      font-size: 15px;
    }

    &-large {
      padding-top: 11px;
      padding-bottom: 11px;
      font-size: 18px;
    }

    &-disabled {
      cursor: not-allowed;
      opacity: 0.4;

    &:active::before {
    display: none;
  }
}

    
  }
`
export { ButtonClass }