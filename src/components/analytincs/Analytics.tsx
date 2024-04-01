const Analytics = () => {
    return (
        <section>
            <div className="flex gap-5 justify-between">
                <div className="basis-1/2 flex items-center justify-center">
                    <img
                        src="/analytics.png"
                        className="w-[70%] object-cover bg-center"
                    />
                </div>
                <div className="basis-1/2">
                    <h4 className="mb-1 text-[#aad8d9]">Analytics</h4>
                    <h1 className="text-[57px] font-bold leading-[65px] capitalize">
                        built-in analytics <br /> to track your nfts
                    </h1>
                    <p className="text-[18px] my-16">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Praesentium consectetur ullam aspernatur velit
                        recusandae, pariatur quidem earum iure eos saepe.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#8c88da] px-16 py-5 rounded-full uppercase font-bold">
                            View Our Pricing
                        </button>
                    </div>
                </div>
            </div>{" "}
            <div className="flex gap-5 justify-between mt-32">
                <div className="basis-1/2">
                    <h4 className="mb-1 text-[#aad8d9]">Analytics</h4>
                    <h1 className="text-[57px] font-bold leading-[65px] capitalize">
                        built-in analytics to track your nfts
                    </h1>
                    <p className="text-[18px] my-16">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Praesentium consectetur ullam aspernatur velit
                        recusandae, pariatur quidem earum iure eos saepe.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#8c88da] px-16 py-5 rounded-full uppercase font-bold">
                            View Our Pricing
                        </button>
                    </div>
                </div>
                <div className="basis-1/2 flex items-center justify-center">
                    <img
                        src="/analytics-2.png"
                        className="w-[70%] object-cover bg-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default Analytics;
