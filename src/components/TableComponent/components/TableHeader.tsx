import React from 'react';
import styled from 'styled-components';

import { COLOURS, ITableConfig } from '../../../helpers/config';

interface IProps {
  headerData: ITableConfig;
  index: number;
  handleOpenModal: (indexOfColumn: number) => void;
  handleSortTable: (tableHeader: string) => void;
}

export const TableHeader: React.FC<IProps> = ({
  headerData,
  index,
  handleOpenModal,
  handleSortTable,
}) => (
  <THeader
    style={{ width: `${headerData.columnWidth}%` }}
    key={headerData.header}
  >
    <span> {headerData.header}</span>
    <ArrowsContainer>
      <ArrowsWrapper onClick={() => handleSortTable(headerData.header)}>
        <TriangleUp />
        <TriangleDown />
      </ArrowsWrapper>
    </ArrowsContainer>
    <AddColumnButton onClick={() => handleOpenModal(index)}>
      <Line />
      <RotatedLine />
    </AddColumnButton>
  </THeader>
);

const THeader = styled.th`
  color: black;
  font-weight: bold;
  text-align: left;
  padding-left: 15px;
  position: relative;

  &:hover {
    color: ${COLOURS.orange};

    div {
      visibility: unset;
      border-color: ${COLOURS.orange};
    }
  }
`;

const AddColumnButton = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  width: 18px;
  height: 18px;
  background-color: ${COLOURS.weakOrange};
  border-radius: 50%;
  cursor: pointer;

  visibility: hidden;
`;

const Line = styled.div`
  width: 10px;
  height: 2px;
  position: absolute;
  left: 4px;
  top: 8px;
  background-color: ${COLOURS.orange};
`;

const RotatedLine = styled(Line)`
  transform: rotate(90deg);
`;

const ArrowsContainer = styled.div`
  display: inline-block;
  position: relative;
  bottom: 5px;
  padding-left: 5px;
`;

const ArrowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TriangleUp = styled.span`
  width: 0;
  height: 0;

  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 6px solid black;
`;

const TriangleDown = styled(TriangleUp)`
  margin-top: 3px;

  border-bottom: none;
  border-top: 6px solid black;
`;
