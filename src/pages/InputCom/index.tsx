import { useCallback, useRef, useState } from 'react';
import styles from './index.less';

const Index = ({ onValueChange }) => {
  const [codes, setCodes] = useState(Array.from({ length: 6 }, () => ''));
  const inputsRef = useRef([]);

  const onInput = useCallback((index, event) => {
    const currentValue = event.target.value.match(/[0-9]{1}/)
      ? event.target.value
      : '';
    // 自动聚焦下一个输入框
    if (currentValue) {
      setCodes((pre) => {
        const newCodes = [...pre];
        newCodes[index] = currentValue;
        onValueChange?.(newCodes.join(''));
        return newCodes;
      });
      if (index + 1 === codes.length) return;
      inputsRef.current[index + 1].focus();
    }
  }, []);

  const onKeyDown = useCallback(
    (index, event) => {
      // 是否按下删除键, 否提前结束
      if (event.key !== 'Backspace') {
        return;
      }
      setCodes((pre) => {
        const newData = [...pre];
        newData[index] = '';
        return newData;
      });
      if (index === 0) {
        return;
      }
      inputsRef.current[index - 1].focus();
    },
    [codes],
  );

  return (
    <div>
      {codes.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          maxLength={1}
          className={styles.textInput}
          ref={(ele) => (inputsRef.current[index] = ele)}
          onChange={onInput.bind(null, index)}
          onKeyDown={onKeyDown.bind(null, index)}
        />
      ))}
    </div>
  );
};

export default Index;
