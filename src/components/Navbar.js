import srm from '../utils/icons/srm.png'

export const Navbar = () => {
    return (
        <nav className='flex p-12 pb-8'>
            <figure>
                <img src={srm} alt="SRM Logo" />
            </figure>
            <div className='flex justify-evenly space-x-4'>
            <button className='bg-buttonbg my-12 px-12'>Home</button>
            <button className='bg-buttonbg my-12 px-12'>About</button>
            <button className='bg-buttonbg my-12 px-12'>Speakers</button>
            <button className='bg-buttonbg my-12 px-12'>Sponsors</button>
            </div>
        </nav>
    )
}