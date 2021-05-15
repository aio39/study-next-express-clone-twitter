import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import FollowerList from '../components/FollowerList';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditFrom';

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>NodeBird | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.followings} />
        <FollowerList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
