import search from '../assets/search.svg'
import arrow from '../assets/arrow.svg'

export function Search() {
    return (
        <div className='relative flex gap-[16px] p-[16px] w-[276px] h-[52px] bg-[#333333] rounded-lg cursor-pointer'>
					<img src={search} alt='search' />
					<input className='placeholder:text-[#9e9e9e] w-[175px] text-[16px]/[1.2] text-[#ffffff] font-semibold focus:outline-none' placeholder='Search' type='search' />
					<img className='absolute right-[16.5px] top-[14.25px]' src={arrow} alt="arrow" />
        </div>
    )
}