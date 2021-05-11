import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';
import FollowerList from '../components/FollowerList';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditFrom';

const Profile = () => {
  const follower = [
    { nickname: 'abc1' },
    { nickname: 'abc1' },
    { nickname: 'abc1' },
  ];
  const following = [
    { nickname: 'abc1' },
    { nickname: 'abc1' },
    { nickname: 'abc1' },
  ];

  return (
    <>
      <Head>
        <title>NodeBird | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={following} />
        <FollowerList header="팔로워 목록" data={follower} />
      </AppLayout>
    </>
  );
};

export default Profile;
