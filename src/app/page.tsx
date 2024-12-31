import Introduction from '@/component/home/Introduction'
import RecentPostList from '@/component/post/RecentPostList'
import Separator from '@/component/ui/Separator'

const Page = () => {
  return (
    <div>
      <Introduction />
      <Separator className="my-[1.7rem]" />
      <RecentPostList />
    </div>
  )
}

export default Page
