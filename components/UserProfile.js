import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
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
      <Card.Meta avatar={<Avatar>aio</Avatar>} title="Aio"></Card.Meta>
      <Button onClick={onLogOut}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
