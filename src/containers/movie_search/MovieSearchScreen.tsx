import { Input } from 'antd';
import React from 'react';

const SearchScreen: React.FC = () => {
  return <Input.Search placeholder="Search" disabled style={{ width: 200 }} />;
};

export default SearchScreen;
