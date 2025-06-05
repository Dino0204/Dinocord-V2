import { ChannelIcon } from "@/shared/channel_icon"
import { FolderIcon } from "@/shared/folder_icon"

export const RoomList = () => {
  return (
    <section className="w-max flex flex-col items-center gap-[0.5rem] mx-[1rem] shrink-0">
      <ChannelIcon />
      <div className="w-full h-[1px] bg-white"></div>
      <ChannelIcon />
      <FolderIcon />
      <FolderIcon />
      <FolderIcon />
      <FolderIcon />
    </section>
  )
}
