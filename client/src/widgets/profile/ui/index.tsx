import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Profile = () => {
  return (
    <section className="w-[23.375rem] h-[3.75rem] absolute left-2 bottom-2 flex items-center pl-[0.5rem] rounded-[0.5rem] bg-primary-300 ">
      <Avatar className="w-[2.5rem] h-[2.5rem]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>
  )
}
