
import element from "/element.png"

const Blogs = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-12'>
            <div className="max-w-screen-xl mx-auto">
                <img className='text-center mx-auto' src={element} alt="" />
                <h1 className='font-extrabold text-5xl mt-8 text-center' >Our Latest Blog</h1>
                <p className='w-[331px] font-paprika text-[18px] mt-8  mx-auto text-center'>We provide digital experience services to startups and small businesses.</p>
            </div>

            {/* card  */}
            <section className='flex mx-auto gap-x-5 '>
                <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://images.ctfassets.net/pdf29us7flmy/1mzkiaBqdWkAF8smX4s0rb/007dda81b2bf0f48402e3c1258ea24da/search_engine1_GettyImages-1136801544_.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide w-[260px]">How to Be Ahead of Stock Changes</h2>
                            <p className="dark:text-gray-800">By John  - 5 Comments</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
                <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://media.licdn.com/dms/image/C5612AQFMr22sKNA2sA/article-cover_image-shrink_600_2000/0/1554726405865?e=2147483647&v=beta&t=EHueKz08kxxEj6hprPLsGV3nLtbQXOrE_VKExZnLJSg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide w-[390px]">Tips To Move Your Project More Forward</h2>
                            <p className="dark:text-gray-800">By John  - 5 Comments</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
                <div className="s rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://wpengine.circleslife.co/wp-content/uploads/2022/09/pexels-andrea-piacquadio-864994-scaled.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide w-[390px]">Online Reputation And Management</h2>
                            <p className="dark:text-gray-800">By John  - 5 Comments</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs