import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownWrapper = styled(ReactMarkdown)`
  font-size: 16px;
  user-select: text;

  & td {
    border: 1px solid;
  }

  & strong {
    font-weight: 700;
  }

  ul {
    margin-left: 32px;
    margin-bottom: 18px;

    & > li::before {
      position: absolute;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      transform: translateY(230%);
      margin-left: -18px;
    }

    & p {
      margin: 0;
    }
  }

  ol {
    margin-left: 36px;
    margin-bottom: 18px;

    & > li {
      counter-increment: li;

      &::before {
        position: absolute;
        margin-left: -24px;
        content: counter(li) '.';
        font-weight: 700;
      }

      & p {
        margin: 8px 0;
      }
    }
  }

  & li {
    font-size: 1em;
    line-height: 2;
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin-bottom: 16px;
  }

  h1 {
    margin-top: 40px;
    font-size: 40px;
  }
  h2 {
    margin-top: 26px;
    font-size: 32px;
  }
  h3 {
    margin-top: 24px;
    font-size: 24px;
  }
  h4 {
    margin-top: 24px;
    font-size: 18px;
  }
  h5 {
    margin-top: 24px;
    font-size: 16px;
  }
  h6 {
    margin-top: 24px;
    font-size: 14px;
  }

  & img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`;

export default MarkdownWrapper;
