import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        //  NOTE jsx의 배열에서는 key가 필수
        <div key="twit">
          twit <br />0
        </div>,
        <div key="followings">
          twit <br />0
        </div>,
        <div key="followers">
          twit <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      ></Card.Meta>
      <Button onClick={onLogOut} loading={isLoggingOut}>
        Log Out
      </Button>
    </Card>
  );
};

export default UserProfile;
