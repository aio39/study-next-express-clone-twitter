import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

//  NOTE styles가 따로 분리될 컴포넌트 정리방식
//  react-slick은 css를 다 따로 해줘야함.
export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  header: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

//  NOTE slick 에는 기본적으로  적용되어있는 스타일이 있어 정해진 클래스명으로 덮어써야함.
//  아무곳에 넣어주면  전역으로 적용됨.
//  다른 컴포넌트 스타일들은 클래스명이 랜덤으로 생성되지만 글로벌은  원래대로 됨.
export const Global = createGlobalStyle`
    .slick-slide { 
        display: inline-block;
    }
//  NOTE transform 속성에 있는 태그안에 fix 요소가 들어가면 fix가 작동이 제대로 안 될 수도 있다.
    .ant-card-cover {
        transform: none !important;
    }
`;
