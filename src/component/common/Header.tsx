import Link from 'next/link'
import ColorModeSwitch from '@/component/common/ColorModeSwitch'
import Button from '@/component/ui/Button'
import { Home } from '@/component/ui/icons'

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/">
        <Button variant="ghost" size="icon" className="[&_svg]:size-7 md:[&_svg]:size-8">
          <Home />
        </Button>
      </Link>
      <ColorModeSwitch />
    </div>
  )
}

export default Header
