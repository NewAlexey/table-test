import React from 'react';
import styled from 'styled-components';

import { COLOURS, ITableConfig } from '../../../helpers/config';
import { ITableData } from '../../../interfaces/interfaces';
import { getTableCell } from '../helpers';

interface IProps {
  tableItem: ITableData;
  tableConfig: Array<ITableConfig>;
}

export const TableRow: React.FC<IProps> = ({ tableItem, tableConfig }) => (
  <Tr>
    {getTableCell(tableItem, tableConfig)}
    <Td>
      <ButtonsContainer>
        <DealButton>Add Deal</DealButton>
        <InventoryButton>Add to Inventory</InventoryButton>
      </ButtonsContainer>
    </Td>
  </Tr>
);

const Tr = styled.tr`
  &:hover {
    td:first-child {
      color: ${COLOURS.orange};
    }
  }

  td:last-child {
    div {
      visibility: hidden;
    }
  }

  &:hover {
    td:last-child {
      div {
        visibility: unset;
      }
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${COLOURS.orange};

  &:hover {
    background-color: ${COLOURS.weakOrange};
  }
`;

const DealButton = styled(Button)``;

const InventoryButton = styled(Button)``;

const Td = styled.td`
  padding: 10px;
  position: relative;
`;
