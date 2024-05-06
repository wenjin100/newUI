import TreeCom from './app';

// 准备树形数据
const treeData = [
  {
    title: 'parent 1',
    id: '1',
    expand: true,
    children: [
      {
        id: '1-1',
        title: 'parent 1-1',
        expand: true,
        children: [
          {
            id: '1-1-1',
            title: 'leaf 1-1-1',
            expand: false,
          },
          {
            id: '1-1-2',
            title: 'leaf 1-1-2',
            expand: false,
          },
        ],
      },
      {
        id: '1-2',
        title: 'parent 1-2',
        expand: false,
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

// 传递树形数据
const App = () => {
  return (
    <div>
      {/** 传递树形结构数据 **/}
      <TreeCom data={treeData} />
    </div>
  );
};

export default App;
