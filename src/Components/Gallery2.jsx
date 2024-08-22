
import element from "/element.png"


const Gallery2 = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-[50px]'>
            <div className="mx-au text-center py-8 mt-8   ">
                <img className='text-center mx-auto' src={element} alt="" />
                <h1 className='font-bold text-4xl mt-5 mb-8'>Work Showcase </h1>
            </div>
            {/* first tab */}
            <div role="tablist" className="tabs tabs-lifted py-8">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-orange-500 font-bold"
                    aria-label="All 1" />

                <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
                    <section className="py-6 ">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />

                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-6">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* tab 2 */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Digital Mkt 2"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6">

                    <section className="py-6 ">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://10web.io/blog/wp-content/uploads/sites/2/2024/02/Marketing-websites-image-scaled.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://digital-bucket.prod.bfi.co.id/assets/Blog/7%20Jenis%20Strategi%20Digital%20Marketing%20yang%20Perlu%20Anda%20Ketahui/image2.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.sevenmentor.com/wp-content/uploads/2023/06/Fundamentals-of-Digital-Marketing-in-2023.jpg" />

                            </div>

                        </div>
                    </section>
                </div>
                {/* tab 2 */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab  w-fit"
                    aria-label="Branding 2"
                    defaultChecked 
                    />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    <section className="py-6 ">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />

                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-6">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />
                            </div>
                        </div>
                    </section>
                </div>
                {/* tab 2 */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Content Mkt 2"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    <section className="py-6 ">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />

                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-6">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />
                            </div>
                        </div>
                    </section>
                </div>



                {/* tab 3 */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab w-[150px]" aria-label="Social Media Mkt 3" />
                <div role="tabpanel" className=" tab-content bg-base-100  rounded-box p-6">

                    <section className="py-6 ">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://static-cse.canva.com/blob/1157329/Howtobuildadigitalmarketingstrategyfromscratchbanner.png" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />

                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-6">
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://dazzeldigital.com/wp-content/uploads/2022/03/digital-marketing-agencies-in-delhi.jpg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://merged.ca/wp-content/uploads/2021/04/image4-2.jpeg" />
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.merchantcapital.co.za/hubfs/7cba9680-1465-4940-afb3-2367ae6f346d.png" />

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Gallery2