import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import Head from 'next/head';
import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  // TODO useEffect
  //  TODO Router replace로 교체
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked); // NOTE checkbox는 checked 옵션
  }, []);

  const onSubmit = useCallback(() => {
    // 이중 체크
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, nickname, password },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>NodeBird | 회원가입</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">이메일</label>
            <br />
            <Input
              name="user_email"
              type="email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user_nick"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user_password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 체크</label>
            <br />
            <Input
              nam드="user_password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage style={{ color: 'red' }}>
                비밀번호가 일치하지 않습니다.
              </ErrorMessage>
            )}
          </div>

          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              동의합니다.
            </Checkbox>
            {termError && (
              <ErrorMessage style={{ color: 'red' }}>
                {' '}
                약관에 동의하셔야 합니다.
              </ErrorMessage>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
