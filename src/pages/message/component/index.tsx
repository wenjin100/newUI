import classNames from 'classnames';
import { ComponentProps, useEffect, useState } from 'react';
import { MessageStyle } from './style';

type defaultProps = ComponentProps<'div'>;

type CustomProps = {
  type?: 'success' | 'info' | 'warning' | 'error';
};

type Props = defaultProps & CustomProps;

const Message = (props: Props) => {
  const { style, type = 'info', children = 'this is default message' } = props;

  // 配置动画显示
  const [showClass, setShowClass] = useState(false);

  useEffect(() => {
    // 控制类名显示 触发动画开启
    setTimeout(() => {
      setShowClass(true);
    }, 0);

    // 控制类名隐藏 控制动画回撤
    setTimeout(() => {
      setShowClass(false);
    }, 1500);
  }, []);

  // 计算对应类名
  const classList = classNames(MessageStyle, `adm-message-${type}`, {
    'adm-message-show': showClass,
  });

  return (
    <div className={classList} style={style}>
      <span>{children}</span>
    </div>
  );
};

export default Message;
