import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        //  NOTE jsx의 배열에서는 key가 필수
        <div key="twit">
          짹쨱 <br /> {me.Posts.length}
        </div>,
        <div key="followings">
          팔로잉 <br /> {me.Followings.length}
        </div>,
        <div key="followers">
          팔로워 <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      ></Card.Meta>
      <Button onClick={onLogOut} loading={logOutLoading}>
        Log Out
      </Button>
    </Card>
  );
};

export default UserProfile;
