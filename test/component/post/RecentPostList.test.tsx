import { render, screen } from '@testing-library/react'
import type { Mock } from 'jest-mock'
import { posts } from '../../fixture/post'
import RecentPostList from '@/component/post/RecentPostList'
import { getPosts } from '@/module/post/api'

jest.mock('@/module/post/api', () => ({
  getPosts: jest.fn()
}))

jest.mock('@/component/post/PostList', () => () => <div data-testid="post-list" />)

describe('RecentPostList는', () => {
  it('모든 게시글로 이동하는 버튼과 최근의 게시글들에 대한 PostList 컴포넌트를 렌더링한다.', () => {
    ;(getPosts as Mock).mockReturnValue(posts)

    render(<RecentPostList />)

    const link = screen.getByRole('link')
    const PostList = screen.getAllByTestId('post-list')

    expect(link).toHaveAttribute('href', '/post')
    expect(PostList).toBeInTheDocument()
  })
})
