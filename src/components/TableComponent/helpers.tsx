import React from 'react';

import styled, { css } from 'styled-components';
import {
  COLOURS,
  ITableConfig,
  reversedTableConfig,
  StatusList,
} from '../../helpers/config';
import { ITableData } from '../../interfaces/interfaces';

const Td = styled.td`
  padding: 10px;
  position: relative;
`;

function getMappedHeaderTitle(headerTitle: string): string {
  return reversedTableConfig[headerTitle as keyof typeof reversedTableConfig];
}

export function getTableCell(
  tableItem: ITableData,
  tableConfig: Array<ITableConfig>,
): Array<JSX.Element> {
  const arrayTableCellData = [];

  for (let i = 0; i < tableConfig.length; i += 1) {
    const mappedHeaderTitle = getMappedHeaderTitle(
      tableConfig[i].header,
    ) as keyof ITableData;
    const value = tableItem[mappedHeaderTitle];

    if (
      value &&
      (value === StatusList.draft ||
        value === StatusList.readyToPublish ||
        value === StatusList.published)
    ) {
      arrayTableCellData.push(<StatusCell value={value} />);
    } else if (value) {
      arrayTableCellData.push(<Td>{value}</Td>);
    }
  }

  return arrayTableCellData;
}

interface IProps {
  value: string;
}

const StatusCell: React.FC<IProps> = ({ value }) => (
  <Td>
    <Container>
      <ColoredElement
        red={value === StatusList.draft}
        green={value === StatusList.published}
        yellow={value === StatusList.readyToPublish}
      />
      <Text>{value}</Text>
    </Container>
  </Td>
);

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  background-color: ${COLOURS.statusBCGrey};
  padding: 4px 0;
  border-radius: 5px;
`;

const ColoredElement = styled.div<{
  red?: boolean;
  green?: boolean;
  yellow?: boolean;
}>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin: 0 7px;

  ${({ red }) =>
    red &&
    css`
      background-color: ${COLOURS.statusRed};
    `}

  ${({ green }) =>
    green &&
    css`
      background-color: ${COLOURS.statusGreen};
    `}

  ${({ yellow }) =>
    yellow &&
    css`
      background-color: ${COLOURS.statusYellow};
    `}
`;

const Text = styled.span``;
