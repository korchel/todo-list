import React from 'react';
import { getText } from '../../../store/modalSlice';
import { useSelector } from 'react-redux';
import { Text } from './styles';

const ErrorModal: React.FC = () => {
  const text = useSelector(getText);

  return <Text>{text}</Text>;
};

export default ErrorModal;
