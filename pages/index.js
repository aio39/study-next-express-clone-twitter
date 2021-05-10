import React from 'react'; // 없어도 문제 없긴 함.
import AppLayout from '../components/AppLayout';

// NOTE next가 pages 폴더에서 자동으로 찾아줌.
const Home = () => {
  return (
    <AppLayout>
      <div>Hello next</div>;
    </AppLayout>
  );
};

export default Home;
