import React from 'react';
import 'antd/dist/antd.css'; //css를 가져오면 webpack이 알아서 처리해줌. 모든
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';

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

// NOTE next에 Redux 적용하기
// next에서는 provider로 따로 감싸주지 않음. 자동으로 해줌.
export default wrapper.withRedux(withReduxSaga(NodeBird));
