import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

// NOTE 재랜더링 방지를 위한 css
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// NOTE gutter 옵션을 줬을때 좌우 스크롤이 발생
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  // useSelector 로 reducer에게서 state를 받아 씀.
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        {/* NOTE  a 태그가 아니라 Link에 href */}
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            style={{ verticalAlign: 'middle' }}
          ></SearchInput>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/*  합을 24로 생각 antd grid 참고 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="http://aio392.com" target="_blank" rel="noopener noreferrer">
            Made by aio
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
