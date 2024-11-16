import { ComponentProps } from 'react';
import { CardStyle } from './style';

type DefaultProps = ComponentProps<'div'>;

type CustomProps = {
  title?: string;
  showTitle?: boolean;
  extra?: React.ReactNode;
};

type Props = DefaultProps & CustomProps;

const Card = (props: Props) => {
  const {
    style,
    children = 'Default main content',
    title = 'default title',
    showTitle = true,
    extra,
  } = props;
  return (
    <div className={CardStyle} style={style}>
      <div className="cardContainer">
        {showTitle && (
          <div className="cardHeader">
            {title}
            {extra && <div className="extra">{extra}</div>}
          </div>
        )}
        <div className="cardMain">{children}</div>
      </div>
    </div>
  );
};

export default Card;
