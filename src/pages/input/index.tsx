import { useState } from 'react';
import Input from '../input/component/index';
const Index = () => {
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default Index;
