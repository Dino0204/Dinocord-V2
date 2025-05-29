import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const Channel = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen bg-primary-200">
      <section className="w-[23.375rem] h-[3.75rem] absolute left-2 bottom-2 flex items-center pl-[0.5rem] rounded-[0.5rem] bg-primary-300 ">
        <Avatar className="w-[2.5rem] h-[2.5rem]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
      <header className="w-full h-[2rem] text-center bg-primary-200">
        <h2>디노코드</h2>
      </header>
      <main className="flex h-full">
        <aside className="flex">
          <section className="w-max flex flex-col items-center gap-[0.5rem] mx-[1rem] shrink-0">
            <div className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-gray-100"></div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-gray-100"></div>
            <div className="w-[3rem] h-[3rem] rounded-[1rem] bg-gray-100"></div>
            <div className="w-[3rem] h-[3rem] rounded-[1rem] bg-gray-100"></div>
            <div className="w-[3rem] h-[3rem] rounded-[1rem] bg-gray-100"></div>
          </section>
          <section className="w-[20rem] bg-primary-200 border-l border-t border-white rounded-tl-[0.75rem] overflow-hidden">
            <nav className="w-full h-[3rem] p-4 flex items-center border-b border-white shrink-0">
              디노코드
            </nav>
            <section className="w-full h-full"></section>
          </section>
        </aside>
        <article className="w-full bg-primary-100 border-t border-white overflow-hidden flex flex-col">
          <nav className="w-full h-[3rem] border-b border-white shrink-0"></nav>
          <section className="flex flex-col w-full h-full pb-2 px-2">
            <ul className="relative flex-1 overflow-y-scroll">
              <div className="absolute">
                <li className="w-full flex">
                  <div className="relative w-full flex flex-col mt-7 pl-18 py-0.5">
                    <Avatar className="absolute left-4 top-0.5 w-[2rem] h-[2rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="flex items-center gap-2 w-full ">
                      <h3 className="bold text-blue-500">Dino</h3>
                      <p className="text-sm text-gray-400">어제 오후 11:48</p>
                    </span>
                    <span className="">
                      <p>안녕하세요 디노코드입니다.</p>
                    </span>
                  </div>
                </li>
              </div>
            </ul>
            <Input placeholder="#[]에 메시지 보내기" className="h-[3.75rem] bg-primary-500" />
          </section>
        </article>
      </main>
    </div>
  )
}

export default Channel