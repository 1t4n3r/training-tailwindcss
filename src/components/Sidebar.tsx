import logo from '../assets/logo.svg'
import button from '../assets/button.svg'
import { Search } from './Search'
import { SidebarItem } from './SidebarItem'
import { SidebarProfile } from './SidebarProfile'

const SidebarItems = [{ id: '1', imgUrl: 'src/assets/icons/icon1.svg', title: 'Home' }, { id: '2', imgUrl: 'src/assets/icons/icon2.svg', title: 'Dashboard' }, { id: '3', imgUrl: 'src/assets/icons/icon3.svg', title: 'Projects' }, { id: '4', imgUrl: 'src/assets/icons/icon4.svg', title: 'Tasks' }, { id: '5', imgUrl: 'src/assets/icons/icon5.svg', title: 'Reporting' }]
const SidebarItemsSecond = [{ id: '1', imgUrl: 'src/assets/icons/icon6.svg', title: 'Notifications' }, { id: '2', imgUrl: 'src/assets/icons/icon7.svg', title: 'Support' }, { id: '3', imgUrl: 'src/assets/icons/icon8.svg', title: 'Settings' }]
const ProfileData = { login: "Brooklyn Simmons", email: "brooklyn@simmons.com" }

export function Sidebar() {
  return (
    <div className='w-[311px] h-[100vh] bg-[#2c2c2c] flex flex-col justify-between rounded-2xl px-[17px] py-[40px]'>
      <div className='flex flex-col gap-[32px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[8px] cursor-pointer'>
            <img src={logo} alt='logo' />
            <h1 className='font-(--font-inter) font-semibold text-white text-2xl'>Untitled</h1>
          </div>
          <span className='cursor-pointer'>
            <img src={button} alt='button' />
          </span>
        </div>
        <Search />
        <ul>
          {
            SidebarItems.map((item) => {
              return (
                <SidebarItem key={item.id} imgUrl={item.imgUrl} title={item.title} />
              )
            })
          }
        </ul>
      </div>
      <div className='flex flex-col gap-[32px]'>
        <ul>
          {
            SidebarItemsSecond.map((item) => {
              return (
                <SidebarItem key={item.id} imgUrl={item.imgUrl} title={item.title} />
              )
            })
          }
        </ul>
        <SidebarProfile login={ProfileData.login} email={ProfileData.email} />
      </div>
    </div>
  )
}