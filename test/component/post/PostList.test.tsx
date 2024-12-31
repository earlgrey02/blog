import { render, screen } from '@testing-library/react'
import { posts } from '../../fixture/post'
import PostList from '@/component/post/PostList'

jest.mock('@/component/post/PostItem', () => () => <div data-testid="post-item" />)

describe('PostList는', () => {
  it('PostItem 컴포넌트들을 렌더링한다.', () => {
    render(<PostList posts={posts} />)

    const PostItems = screen.getAllByTestId('post-item')

    expect(PostItems).toHaveLength(posts.length)
    PostItems.forEach(PostItem => expect(PostItem).toBeInTheDocument())
  })
})
