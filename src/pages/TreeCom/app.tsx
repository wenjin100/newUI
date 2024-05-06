import { createContext, useContext } from 'react';
import TreeStyle from './style';
import useExpend from './useExpend';

// 每个树形节点对象的类型
type Node = {
  id: number | string;
  title: string;
  children?: Node[];
  expand?: boolean;
};

// Tree组件 Props类型
type TreeProps = {
  data: Node[];
};

type TreeNodeProps = {
  node: Node;
};

// 创建ctx对象
const ExpandCtx = createContext<
  ((id: string, isExpand: boolean) => void) | null
>(null);

const TreeNode = (props: TreeNodeProps) => {
  const { node } = props;
  const onExpand = useContext(ExpandCtx);
  console.log(onExpand);
  return (
    <ul className="treeUl">
      <li className="treeLi">
        {node.children && !node.expand && (
          <span className="expandBtn">
            <span
              className="expandBtn"
              onClick={() => onExpand && onExpand(node.id, !node.expand)}
            >
              +
            </span>
          </span>
        )}
        {node.children && node.expand && (
          <span className="expandBtn">
            <span
              className="expandBtn"
              onClick={() => onExpand && onExpand(node.id, !node.expand)}
            >
              -
            </span>
          </span>
        )}
        <span>{node.title}</span>
      </li>
      {/* 如果还有子节点就递归渲染自己 */}
      {node.expand &&
        node.children &&
        node.children.map((item) => <TreeNode node={item} key={item.id} />)}
    </ul>
  );
};

const Tree = (props: TreeProps) => {
  const { data } = props;
  const { treeData, toggleExpand } = useExpend(data);
  return (
    <div className={TreeStyle}>
      <div className="treeContainer">
        <ExpandCtx.Provider value={toggleExpand}>
          {/* 渲染TreeNode */}
          {treeData.map((item) => (
            <TreeNode node={item} key={item.id} />
          ))}
        </ExpandCtx.Provider>
      </div>
    </div>
  );
};

export default Tree;
