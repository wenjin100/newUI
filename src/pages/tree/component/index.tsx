import { TreeStyle } from '../style';

// 每个树形节点对象的类型
type Node = {
  id: number | string;
  title: string;
  children?: Node[];
};

// Tree组件 Props类型
type TreeProps = {
  data: Node[];
};

type TreeNodeProps = {
  node: Node;
};

const TreeNode = (props: TreeNodeProps) => {
  const { node } = props;
  return (
    <ul className="treeUl">
      <li className="treeLi">
        <span>{node.title}</span>
      </li>
      {/* 如果还有子节点就递归渲染自己 */}
      {node.children &&
        node.children.map((item) => <TreeNode node={item} key={item.id} />)}
    </ul>
  );
};

const Tree = (props: TreeProps) => {
  const { data } = props;
  return (
    <div className={TreeStyle}>
      <div className="treeContainer">
        {data.map((item) => (
          <TreeNode node={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Tree;
