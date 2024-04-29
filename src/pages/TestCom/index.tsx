import InputCom from '../InputCom/index';
const Index = () => {
  const onValueChange = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <InputCom onValueChange={onValueChange} />
    </div>
  );
};

export default Index;
