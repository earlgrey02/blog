import Image from 'next/image'
import Link from 'next/link'
import Button from '@/component/ui/Button'
import { GitHub } from '@/component/ui/icons'

const Introduction = () => {
  return (
    <div className="my-6 flex h-28 gap-5 md:h-40 md:gap-7">
      <div className="relative aspect-square">
        <Image
          className="rounded-md"
          src="https://avatars.githubusercontent.com/u/82157140?v=4"
          alt="earlgrey02"
          fill
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-4 md:py-2 md:leading-6">
        <div className="flex flex-col md:gap-2">
          <div className="text-[0.75rem] font-light text-neutral-600 dark:text-neutral-400 md:text-[0.95rem]">
            Backend Developer
          </div>
          <div className="text-[1.4rem] font-extrabold md:text-[1.8rem]">정상윤</div>
        </div>
        <div className="text-[0.8rem] font-light md:text-[0.95rem]">그저 평범한 공대생의 개발 블로그입니다.</div>
        <div className="-mx-1.5 flex items-center">
          <Link href="https://github.com/earlgrey02" target="_blank">
            <Button variant="ghost" size="icon" className="[&_svg]:size-[1.7rem] md:[&_svg]:size-8">
              <GitHub />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction
