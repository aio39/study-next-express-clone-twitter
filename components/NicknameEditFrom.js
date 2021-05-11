import { Input } from 'antd';
import Form from 'antd/lib/form/Form';
import { useMemo } from 'react';
import React from 'react';

const NicknameEditForm = () => {
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '10px',
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정"></Input.Search>
    </Form>
  );
};

export default NicknameEditForm;
