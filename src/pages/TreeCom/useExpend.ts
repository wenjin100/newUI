import { produce } from 'immer';
import { useState } from 'react';
function changeTreeData(data: Node[], id: string, expand: boolean) {
  data.forEach((item) => {
    if (item.id === id) {
      return (item.expand = expand);
    }
    if (item.children) {
      changeTreeData(item.children, id, expand);
    }
  });
}

const useExpend = (data: Node[]) => {
  const [treeData, setTreeData] = useState(data);
  const toggleExpand = (id: string, expand: boolean) => {
    setTreeData(produce((draft) => changeTreeData(draft, id, expand)));
  };
  return {
    treeData,
    toggleExpand,
  };
};
export default useExpend;
