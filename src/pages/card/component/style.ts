import { css } from '@emotion/css'

const CardStyle = css`
  .cardContainer {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    font-size: 16;
  }
  .cardHeader {
    position: relative;
    padding: 10px 24px;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;

    .extra {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .cardMain {
    padding: 24px;
  }
`

export { CardStyle }