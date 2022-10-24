import { message } from 'antd';
import React from 'react';
import './css/message.scss';
export enum MessageType {
  success = 'success',
  info = 'info',
}

interface Props {
  content: string;
  type: MessageType;
  className?: string;
  key?: string;
  duration?: number;
  style?: React.CSSProperties;
  onClick?: VoidFunction;
  onClose?: VoidFunction;
}

/**
 * type is required
 * content is required
 * @returns JSX.Element
 */
const MessageCustomComponent = (props: Props) => {
  const { content, type, className, duration, key, style } = props;
  const styleCss = {
    ...style,
  };
  switch (type) {
    case MessageType.success:
      message.success({
        content,
        className,
        style,
        duration,
        key,
      });
      break;

    default:
      break;
  }
};

export default MessageCustomComponent;
