import { render, screen } from '@testing-library/react'
import Header from '@/component/common/Header'

jest.mock('@/component/common/ColorModeSwitch', () => () => <button data-testid="color-mode-switch" />)

describe('Header는', () => {
  it('메인 페이지로 이동하는 버튼을 렌더링한다.', () => {
    render(<Header />)

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })

  it('ColorModeSwitch 컴포넌트를 렌더링한다.', () => {
    render(<Header />)

    const ColorModeSwitch = screen.getByTestId('color-mode-switch')

    expect(ColorModeSwitch).toBeInTheDocument()
  })
})
