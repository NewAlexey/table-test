import React from 'react';
import styled from 'styled-components';
import { TableSettingPanel } from '../modals/TableSettingModal';
import { useCatalogueContext } from '../../context/CatalogueContext';

export const SearchComponent: React.FC = () => {
  const [isSettingPanelOpen, setIsSettingPanelOpen] = React.useState(false);
  const { searchData, handleSetSearchData } = useCatalogueContext();

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const inputValue = event.target.value;
    handleSetSearchData(inputValue);
  };

  return (
    <Container>
      <CustomInput onChange={handleChangeInput} value={searchData} />
      <SettingButton
        onClick={() => setIsSettingPanelOpen((prevState) => !prevState)}
      >
        Click For Setting
      </SettingButton>

      {isSettingPanelOpen && <TableSettingPanel />}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const CustomInput = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 15px;
  padding-left: 10px;
`;

const SettingButton = styled.button``;
