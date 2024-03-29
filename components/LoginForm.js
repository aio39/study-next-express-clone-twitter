/* eslint-disable react/prop-types */
import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import Link from 'next/link';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
// useCallback은 함수를 캐싱한다.
// useMemo는 값을 캐싱해서 함수가 재호출되도 같은 값을로 취급해준다.

// NOTE  style에 객체를 그대로 주면 객체는 참조값이어서 객체가 다르다고 판단해서 항상 재랜더링해버린다.
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  //  TODO logInerror

  // NOTE  styled components를  사용하지 않는다면 useMemo로 값을 캐싱 하면 된다.
  //   const style = useMemo(
  //     () => ({
  //       marginTop: 10,
  //     }),
  //     []
  //   );

  const onSubmitForm = useCallback(() => {
    // NOTE e.preventDefault() antd에 기본으로 적용되어있음.
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);
  //   리턴 부분에서 다른 부분만  버츄얼돔으로 비교해서 다시 랜더링
  // state가 아닌 값은 참조값이라면 항상 다른 값으로 침.
  return (
    //   NOTE Form의 onFinish
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input
          name="user_email"
          value={email}
          onChange={onChangeEmail}
          required
        ></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user_password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <ButtonWrapper style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/singup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
