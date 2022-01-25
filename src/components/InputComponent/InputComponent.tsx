import React from 'react';
import styled from 'styled-components';

interface IProps {
  tableWidth: string;
  tableHeader: string;
  handleSetTableWidthSetting: (inputValue: string, tableHeader: string) => void;
}

export const InputComponent: React.FC<IProps> = ({
  tableWidth,
  tableHeader,
  handleSetTableWidthSetting,
}) => {
  const [columnWidth, setColumnWidth] = React.useState(tableWidth);
  const handleResizeColumn = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const inputValue = event.target.value;
    setColumnWidth(inputValue);
    handleSetTableWidthSetting(inputValue, tableHeader);
  };
  return (
    <Input
      type="range"
      min="3"
      max="100"
      value={columnWidth}
      onChange={handleResizeColumn}
    />
  );
};

const Input = styled.input`
  max-width: 200px;
`;
