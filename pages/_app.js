import React from 'react';
import 'antd/dist/antd.css'; //css를 가져오면 webpack이 알아서 처리해줌. 모든
import PropTypes from 'prop-types';
import Head from 'next/head';

//  NOTE  next에서 _App을 만들면 모든 컴포넌트는 여기를 거쳐감.
// 공통적으로 사용되는 부분은 여기서 만들어줌. layout과는 다른 역할
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Component />;
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
