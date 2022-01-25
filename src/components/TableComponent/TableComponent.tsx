import React from 'react';

import styled from 'styled-components';
import { COLOURS, selectMockData } from '../../helpers/config';
import { TableRow } from './components/TableRow';
import { useCatalogueContext } from '../../context/CatalogueContext';
import { TableHeader } from './components/TableHeader';

interface INewTable {
  clickedColumnNumber: number;
  newColumnHeader: string;
}

const defaultValue: INewTable = {
  clickedColumnNumber: 0,
  newColumnHeader: '',
};

export const TableComponent: React.FC = () => {
  const {
    tableData,
    tableConfig,
    handleSetNewTableConfig,
    handleSetSortedTable,
  } = useCatalogueContext();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newColumnData, setNewColumnData] =
    React.useState<INewTable>(defaultValue);

  const handleOpenModal = React.useCallback(
    (indexOfColumn: number) => {
      setIsModalOpen((prevState) => !prevState);
      setNewColumnData({
        ...newColumnData,
        clickedColumnNumber: indexOfColumn,
      });
    },
    [newColumnData],
  );

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
      <ResultContainer>
        <Results>12 687 Result</Results>
      </ResultContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {tableConfig.map((headerData, index) => (
                <TableHeader
                  headerData={headerData}
                  index={index}
                  handleOpenModal={handleOpenModal}
                  handleSortTable={handleSetSortedTable}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((tableItem) => (
              <TableRow tableItem={tableItem} tableConfig={tableConfig} />
            ))}
          </tbody>
        </Table>
      </TableContainer>
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
  position: relative;
`;

const ResultContainer = styled.div`
  margin-top: 15px;
`;

const Results = styled.span``;

const TableContainer = styled.div``;

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;

  tr:nth-child(2n) {
    background-color: ${COLOURS.bcTableEven};
  }

  td:not(:last-child):after {
    content: '';
    height: 70%;
    width: 2px;
    background-color: ${COLOURS.grey};
    position: absolute;
    right: 0;
    top: 20%;
  }

  th:not(:last-child):after {
    content: '';
    height: 70%;
    width: 2px;
    background-color: ${COLOURS.grey};
    position: absolute;
    right: 0;
    top: 20%;
  }

  th:last-child {
    border: none;
  }

  tbody {
    tr {
      &:hover {
        background-color: ${COLOURS.bcGrey};
      }
    }
  }
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
  top: 0;
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
