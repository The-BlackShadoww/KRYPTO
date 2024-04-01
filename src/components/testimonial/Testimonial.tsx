const Testimonial = () => {
    return (
        <section>
            <div className="w-full text-center">
                <h4 className="uppercase mb-1 text-[#aad8d9]">Testimonial</h4>
                <div className="max-full flex justify-center">
                    <h1 className="capitalize text-[57px] font-semibold leading-[60px]">
                        Read what others <br /> have to say
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-28">
                    <div className="relative bg-[#13124f] p-10 rounded-[20px]">
                        <div
                            className="absolute -top-[15%] left-[50%] -translate-x-[50%]  rounded-full w-[80px] h-[80px] overflow-hidden
                        "
                        >
                            <img src="/avatar.jpeg" />
                        </div>
                        <div className="mt-10">
                            <p className="mb-5">Evan</p>
                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Praesentium consectetur ullam
                                aspernatur velit recusandae, pariatur quidem
                                earum iure eos saepe.
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-[#13124f] p-10 rounded-[20px]">
                        <div
                            className="absolute -top-[15%] left-[50%] -translate-x-[50%]  rounded-full w-[80px] h-[80px] overflow-hidden
                        "
                        >
                            <img src="/avatar-2.jpeg" />
                        </div>
                        <div className="mt-10">
                            <p className="mb-5">Lisa</p>
                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Praesentium consectetur ullam
                                aspernatur velit recusandae, pariatur quidem
                                earum iure eos saepe.
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-[#13124f] p-10 rounded-[20px]">
                        <div
                            className="absolute -top-[15%] left-[50%] -translate-x-[50%]  rounded-full w-[80px] h-[80px] overflow-hidden
                        "
                        >
                            <img src="/avatar-3.jpeg" />
                        </div>
                        <div className="mt-10">
                            <p className="mb-5">David</p>
                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Praesentium consectetur ullam
                                aspernatur velit recusandae, pariatur quidem
                                earum iure eos saepe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
