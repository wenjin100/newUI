import Tree from './component';
const treeData = [
  {
    title: 'parent 1',
    id: '1',
    children: [
      {
        id: '1-1',
        title: 'parent 1-1',
        children: [
          {
            id: '1-1-1',
            title: 'leaf 1-1-1',
          },
          {
            id: '1-1-2',
            title: 'leaf 1-1-2',
          },
        ],
      },
      {
        id: '1-2',
        title: 'parent 1-2',
        children: [
          {
            id: '1-2-1',
            title: 'leaf 1-2-1',
          },
          {
            id: '1-2-2',
            title: 'leaf 1-2-2',
          },
        ],
      },
    ],
  },
];

const TreePage = () => {
  return <Tree data={treeData} />;
};

export default TreePage;
