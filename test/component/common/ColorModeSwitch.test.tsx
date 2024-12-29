import { fireEvent, render, screen } from '@testing-library/react'
import type { Mock } from 'jest-mock'
import { useTheme } from 'next-themes'
import ColorModeSwitch from '@/component/common/ColorModeSwitch'

jest.mock('next-themes', () => ({ useTheme: jest.fn() }))

jest.mock('lucide-react', () => ({
  Sun: () => <svg data-testid="sun" />
}))

jest.mock('@/component/ui/icons', () => ({
  Moon: () => <svg data-testid="moon" />
}))

describe('ColorModeSwitch는', () => {
  it('다크 모드로 전환하는 버튼을 렌더링한다.', () => {
    ;(useTheme as Mock).mockReturnValue({ resolvedTheme: 'light' })

    render(<ColorModeSwitch />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('다크 모드인 경우 Sun 컴포넌트를 렌더링한다.', () => {
    ;(useTheme as Mock).mockReturnValue({ resolvedTheme: 'dark' })

    render(<ColorModeSwitch />)

    const Sun = screen.getByTestId('sun')
    const Moon = screen.queryByTestId('moon')

    expect(Sun).toBeInTheDocument()
    expect(Moon).not.toBeInTheDocument()
  })

  it('라이트 모드인 상태에서 버튼을 클릭하면 다크 모드로 전환된다.', () => {
    const setTheme = jest.fn()

    ;(useTheme as Mock).mockReturnValue({ resolvedTheme: 'light', setTheme })

    render(<ColorModeSwitch />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(setTheme).toHaveBeenCalledWith('dark')
  })
})
