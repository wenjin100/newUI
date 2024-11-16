import Card from './component';
const Index = () => {
  return (
    <div>
      <Card
        title="cumtom title"
        style={{ width: '600px' }}
        extra={<a href="#">More</a>}
      >
        <p>this is my content</p>
        <p>this is my content</p>
      </Card>
    </div>
  );
};

export default Index;
