import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  createdAt: string;
}

const Title = styled.h2``;
const Date = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;

export default function TitleSection({ title, createdAt }: TitleProps) {
  return (
    <Title>
      {title}
      <Date>{createdAt}</Date>
    </Title>
  );
}