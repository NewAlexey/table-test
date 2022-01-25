import React from 'react';
import styled from 'styled-components';

import { useCatalogueContext } from '../../../context/CatalogueContext';
import { InputComponent } from '../../InputComponent/InputComponent';
import { selectMockData } from '../../../helpers/config';

interface INewTable {
  clickedColumnNumber: number;
  newColumnHeader: string;
}

const defaultValue: INewTable = {
  clickedColumnNumber: 0,
  newColumnHeader: '',
};

export const TableSettingPanel: React.FC = () => {
  const { tableConfig, handleSetTableWidthSetting, handleSetNewTableConfig } =
    useCatalogueContext();
  const [newColumnData, setNewColumnData] =
    React.useState<INewTable>(defaultValue);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = (numberOfColumn: number): void => {
    setIsModalOpen((prevState) => !prevState);
    setNewColumnData({
      ...newColumnData,
      clickedColumnNumber: numberOfColumn,
    });
  };

  const handleSelectOption = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const newTableHeader = event.target.value;
    if (newTableHeader) {
      setNewColumnData({
        ...newColumnData,
        newColumnHeader: newTableHeader,
      });
    }
  };

  const handleAddNewColumn = (): void => {
    handleSetNewTableConfig(
      newColumnData.newColumnHeader,
      newColumnData.clickedColumnNumber,
    );
    setIsModalOpen(false);
  };

  return (
    <Container>
      {tableConfig.map((config, index) => (
        <div key={config.header}>
          <div>
            <span>{config.header}</span>
            <AddColumnButton onClick={() => handleOpenModal(index)}>
              Add Column
            </AddColumnButton>
          </div>
          <InputComponent
            tableHeader={config.header}
            tableWidth={config.columnWidth}
            handleSetTableWidthSetting={handleSetTableWidthSetting}
          />
        </div>
      ))}
      {isModalOpen && (
        <ModalWindow>
          <Title>Pick the column you want you add</Title>
          <Select onChange={handleSelectOption}>
            <Option defaultValue="0"> </Option>
            {selectMockData.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <SubmitButton onClick={handleAddNewColumn}>
            Add New Column
          </SubmitButton>
        </ModalWindow>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AddColumnButton = styled.button`
  width: 115px;
  margin: 10px 0;
`;

const ModalWindow = styled.div`
  text-align: center;
  padding: 20px;
  width: 200px;
  height: 200px;
  background-color: #929292;
  position: absolute;
  border: 2px solid black;
  transform: translate(calc(50vw - 200px), 50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
`;

const Select = styled.select`
  width: 140px;
  height: 35px;
`;

const Option = styled.option``;

const SubmitButton = styled.button``;
