

const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-5'>
            <footer className="footer bg-gradient-to-r from-[#FBF7F1] to-white  text-base-content p-10">
                <aside>
                    <img src="https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/456697119_1035068631665727_8685079845659028463_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFFrYQeEO7ZUUWqPWRU169NKvj70CQjm3sq-PvQJCObe3Vh_2yjeh37CDFcp7mb4LCJyoGtqTX4TjnaoZqw8vSQ&_nc_ohc=_nYnJpFA3nMQ7kNvgHaHCUf&_nc_ht=scontent.fdac175-1.fna&oh=00_AYCsil13I-Dvaz-qdct_ExfBNQ0vJ7XokTfLeYMaqm1fBg&oe=66CCDD0E" alt="" />
                    <p className='w-[450px] font-paprika text-[18px] mt-7'>
                        Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
                    </p>
                </aside>
                <nav className='font-nunito text-[18px]'>
                    <h6 className="footer-title font-bold">Features</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Benifit</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav className='font-nunito text-[18px]'>
                    <h6 className="footer-title">Products</h6>
                    <a className="link link-hover">Task Management</a>
                    <a className="link link-hover">Company growth</a>
                    <a className="link link-hover">Time tracking</a>
                </nav>
                <nav className='font-nunito text-[18px]'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <h2 className='flex justify-between mt-[60px]'>
                <p>@2024 Innovate.All rights reserved.</p>
                <p className='flex gap-x-10'><span>Privacy policy</span>
                    <span>Terms & condition</span>
                </p>
            </h2>
        </div>
    )
}

export default Footer