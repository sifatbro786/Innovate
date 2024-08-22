

const Banner = () => {
  return (
    <div className='bg-hero bg-cover cover bg-center'>
        <div className=" max-w-screen-xl mx-auto">
            <div className="flex justify-between py-[120px]">
                <div className="">
                    <h1 className=' w-[686px] font-extrabold text-[72px]'>
                    We Are Digital <span className='text-[#FF7628]'>  Marketing </span>  Agency
                    </h1>
                    <p className='font-paprika w-[570px] text-[20px] mt-6'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
                    <div className="navbar-end">
                <a className="btn text-xl px-6 py-2 bg-[#FF7628] rounded-lg text-white mt-8">Get Free Quote</a>
            </div>
                </div>
                <div className="">
                    <div className="bg-slate-400 rounded-md absolute top-[40%]  right-80">
                        <img className='w-[350px]' src="https://static.vecteezy.com/system/resources/previews/021/096/518/original/3d-icon-digital-marketing-png.png" />
                    </div>
                    <div className="bg-slate-400 rounded-md absolute top-[20%]  right-20">
                        <img className='w-[350px]' src="https://static.vecteezy.com/system/resources/previews/011/019/166/non_2x/social-media-and-digital-marketing-3d-illustration-png.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner