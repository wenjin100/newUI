import { ComponentProps } from 'react';
import { InputClass } from './style';

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
  onChange?: (value: string) => void;
  password?: boolean;
};

const Input = (props: Props) => {
  const { onChange, password, ...rest } = props;
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e.target.value);
  };
  return (
    <div className={InputClass}>
      <input
        type="text"
        className="adm-input"
        onChange={onChangeHandler}
        type={!!password ? 'password' : 'text'}
        {...rest}
      />
    </div>
  );
};
export default Input;
