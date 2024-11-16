/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { ComponentProps } from 'react';
import { ButtonClass } from './style';

type ButtonBaseProps = ComponentProps<'button'>; //children、className、onClick都属于默认props，直接由ComponentProps辅助类型函数提供

type CustomProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
};

const Button = (props: ButtonBaseProps) => {
  const {
    children,
    onClick,
    className,
    color = 'default',
    size = 'middle',
    disabled = false,
    ...restProps
  } = props;

  const classList = classNames(
    'adm-button',
    [`${color === 'default' ? '' : `adm-button-${color}`}`],
    `adm-button-${size}`,
    {
      'adm-button-disabled': disabled,
    },
    className,
  );

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    !disabled && onClick?.(e);
  };

  return (
    <div className={ButtonClass}>
      <button className={classList} onClick={onClick} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
