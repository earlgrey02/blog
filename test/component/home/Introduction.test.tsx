import { render, screen } from '@testing-library/react'
import Introduction from '@/component/home/Introduction'

describe('Introduction은', () => {
  it('프로필 사진과 이름 등의 프로필 정보를 렌더링한다.', () => {
    render(<Introduction />)

    const image = screen.getByRole('img')
    const name = screen.getByText('정상윤')

    expect(image).toHaveAttribute('alt', 'earlgrey02')
    expect(name).toBeInTheDocument()
  })
})
