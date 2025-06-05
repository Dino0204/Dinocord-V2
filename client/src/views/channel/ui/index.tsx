import { Input } from "@/components/ui/input"
import { Category } from "@/widgets/category/ui"
import { Chat } from "@/widgets/chat/ui"
import { Profile } from "@/widgets/profile/ui"
import { RoomList } from "@/widgets/roomList/ui"

const Channel = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen bg-primary-200">
      <header className="w-full h-[2rem] text-center bg-primary-200">
        <h2>디노코드</h2>
      </header>
      <main className="flex h-full">
        <aside className="flex">
          <RoomList />
          <Category />
        </aside>
        <article className="w-full bg-primary-100 border-t border-white overflow-hidden flex flex-col">
          <nav className="w-full h-[3rem] p-4 flex items-center  border-b border-white shrink-0">
            <h2>#공지</h2>
          </nav>
          <section className="flex flex-col w-full h-full pb-2 px-2">
            <ul className="relative flex-1 overflow-y-scroll">
              <div className="absolute">
                <Chat />
              </div>
            </ul>
            <Input placeholder="#공지에 메시지 보내기" className="h-[3.75rem] bg-primary-500" />
          </section>
        </article>
      </main>
      <Profile />
    </div>
  )
}

export default Channel