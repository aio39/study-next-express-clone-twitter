import React, { useCallback, useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
    console.log(imagePaths);
  });

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);

  const onClickImageUpload = useCallback(() => {
    //  ref를 통한 파일 업로드창 열기
    imageInput.current.click();
  }, [imageInput.current]);
  console.log(imagePaths);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="mulitpart/from-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요"
      />
      <div>
        {/* ref 사용 */}
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}> 이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹쨱
        </Button>
      </div>
      <div>
        <div>test</div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
