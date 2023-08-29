import React from 'react';
import './style/index.less';

export interface ButtonProps {
  size: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { size } = props;
  return <span className="button-wrap">我是一个按钮啊 - {size}</span>;
};
export default Button;
