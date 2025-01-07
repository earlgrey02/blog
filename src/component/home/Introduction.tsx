import Image from 'next/image'
import Link from 'next/link'
import Button from '@/component/ui/Button'
import { GitHub } from '@/component/ui/icons'

const Introduction = () => {
  return (
    <div className="flex h-28 gap-5 md:h-40 md:gap-7">
      <div className="relative aspect-square">
        <Image
          className="rounded-md object-cover"
          src="/image/profile.jpeg"
          alt="earlgrey02"
          fill
          priority
          sizes="
            (min-width: 768px) 15vw,
            35vw
          "
        />
      </div>
      <div className="flex flex-col [&>div]:flex-1">
        <div className="flex flex-col leading-tight">
          <div className="text-[0.7rem] font-light text-neutral-700 dark:text-neutral-400 md:text-[0.95rem]">
            Backend Developer
          </div>
          <div className="text-[1.25rem] font-extrabold md:text-[1.8rem]">정상윤</div>
        </div>
        <div className="flex items-center text-[0.75rem] font-light md:text-[0.95rem]">
          그저 평범한 공대생의 개발 블로그입니다.
        </div>
        <div className="-ml-2 flex items-end">
          <Link href="https://github.com/earlgrey02" target="_blank">
            <Button variant="ghost" size="icon">
              <GitHub className="size-[1.7rem] md:size-8" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction
