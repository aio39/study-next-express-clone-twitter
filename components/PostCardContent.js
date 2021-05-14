import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

//   regexr.com
const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          //  key를 index로 쓸 떄는 잘 생각하고 쓰자, 잘 안 바뀔때는 사용가능.
          <Link key={i} href={`/hashtag/${v.slice(1)}`}>
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};
export default PostCardContent;
