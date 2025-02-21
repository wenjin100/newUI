import Button from '../button/components/index';
import MessageShow from './component/messageShow';
const Index = () => {
  const showMessage = () => {
    MessageShow.show({
      type: 'info',
      children: 'Hello, this is a props message!',
    });
  };

  return (
    <div>
      <Button onClick={showMessage}>show</Button>
    </div>
  );
};

export default Index;
