import React from 'react'; // 없어도 문제 없긴 함.
import Head from 'next/head';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// NOTE next가 pages 폴더에서 자동으로 찾아줌.
const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      {me && <PostForm />}
      {/* // 반복이 바뀔 가능성이 있다면 index를 key로 쓰면 안됨 */}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
