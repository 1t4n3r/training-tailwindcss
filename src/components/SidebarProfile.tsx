import icon from '../assets/icons/State=online.svg'
import more from '../assets/icons/icon9.svg'

type Props = {
  login: string
  email: string
}

export function SidebarProfile({
  login,
  email
}: Props) {
  return (
    <div className='w-[276px] h-[89px] py-[24px] px-[16px] rounded-lg bg-[#333333] flex justify-between items-center cursor-pointer'>
      <div className='h-[40px] w-fit flex gap-[16px]'>
        <img src={icon} alt="profile-icon" />
        <div className='flex flex-col gap-[8px] items-center leading-[1.2]'>
          <p className='font-semibold text-[#ffffff]'>{login}</p>
          <p className='font-semibold text-[#808080] text-xs'>{email}</p>
        </div>
      </div>
      <span>
        <img src={more} alt="more-button" />
      </span>
    </div>
  )
}