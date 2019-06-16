import React from 'react'
import { Post } from 'types'
import { styled } from 'linaria/react'

const Root = styled.li`
  list-style-type: none;
  display: flex;
  height: 80px;
  width: 100%;

  :not(:first-child) {
    margin-top: 20px;
  }
`

const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

const Link = styled.a``

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 100px);
  justify-content: space-between;
`

const Row = styled.div`
  display: flex;
  align-items: flex-end;
`

export const PostItem: React.FC<Post> = ({
  createdAt,
  title,
  authorName,
  avatarUrl,
  url
}) => (
  <Root>
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
