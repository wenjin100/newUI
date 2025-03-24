import { css } from '@emotion/css';

const TreeStyle = css`
  .treeContainer {
    font-size: 14px;
  }

  .treeUl {
    list-style: none;
    margin: 0;
    padding-left: 24px;
  }

  .treeLi {
    padding: 2px 0;
  }

  .treeLi .expandBtn {
    cursor: pointer;
    margin-right: 4px;
    font-weight: 600;
  }
`;
export { TreeStyle };
