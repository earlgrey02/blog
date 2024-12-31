import { render, screen } from '@testing-library/react'
import { post } from '../../fixture/post'
import PostItem from '@/component/post/PostItem'

jest.mock('@/component/post/TagItem', () => () => <div data-testid="tag-item" />)

describe('PostItem은', () => {
  it('게시글 정보와 각각의 태그에 해당하는 TagItem들을 렌더링한다.', () => {
    render(<PostItem post={post} />)

    const title = screen.getByText(post.frontmatter.title)
    const description = screen.getByText(post.frontmatter.description)
    const date = screen.getByText(post.frontmatter.date.toISOString().split('T')[0])
    const TagItems = screen.getAllByTestId('tag-item')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(TagItems).toHaveLength(post.frontmatter.tags.length)
    TagItems.forEach(TagItem => expect(TagItem).toBeInTheDocument())
  })

  it('클릭시 해당 게시글 페이지로 이동한다.', () => {
    render(<PostItem post={post} />)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', `/post/${post.id}`)
  })
})
