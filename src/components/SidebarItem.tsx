type Props = {
  imgUrl: string
  title: string
}

export function SidebarItem({
  imgUrl,
  title
}: Props) {
  return (
    <li className='w-[276px] h-[52px] p-[16px] rounded-lg flex gap-[16px] items-center cursor-pointer hover:bg-[#333333]'>
      <img src={imgUrl} />
      <span className='font-semibold text-[#9e9e9e] font-(--font-inter)'>{title}</span>
    </li>
  )
}