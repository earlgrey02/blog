import { render, screen } from '@testing-library/react'
import { post } from '../../fixture/post'
import TagItem from '@/component/post/TagItem'

describe('TagItem은', () => {
  it('태그를 렌더링한다.', () => {
    render(<TagItem tag={post.frontmatter.tags[0]} />)

    const tag = screen.getByText(post.frontmatter.tags[0])

    expect(tag).toBeInTheDocument()
  })
})
