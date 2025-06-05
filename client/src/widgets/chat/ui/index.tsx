import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Chat = () => {
  return (
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
  )
}
