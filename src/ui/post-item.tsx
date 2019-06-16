import React from 'react'
import { Post } from 'types'
import { styled } from 'linaria/react'

const Root = styled.li<{ idx: number }>`
  list-style-type: none;
  display: flex;
  height: 80px;
  width: 100%;

  margin-top: 20px;

  animation-name: appear;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-duration: 0.5s;
  animation-delay: ${(p) => p.idx * 0.1}s;
  opacity: 0;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`

const CreatedTime = styled.time`
  font-size: 0.9rem;
  color: #aaa;
`

const AuthorName = styled.p`
  font-size: 1.2rem;
  margin-right: 10px;
  font-weight: bold;
`

const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 20px;
  flex-shrink: 0;
`

const Link = styled.a`
  display: inline-block;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 100px);
  justify-content: space-between;
  align-items: flex-start;
`

const Row = styled.div`
  display: flex;
  align-items: flex-end;
`

export const PostItem: React.FC<Post & { idx: number }> = ({
  idx,
  createdAt,
  title,
  authorName,
  avatarUrl,
  url
}) => (
  <Root idx={idx}>
    <Avatar src={avatarUrl} alt={`Avatar of user ${authorName}`} />

    <Column>
      <Row>
        <AuthorName>{authorName}</AuthorName>
        <CreatedTime>{createdAt}</CreatedTime>
      </Row>

      <Title>{title}</Title>

      <Link href={url} target="_blank" rel="noopener noreferrer">
        Watch full post
      </Link>
    </Column>
  </Root>
)
