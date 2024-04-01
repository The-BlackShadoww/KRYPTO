const Hero = () => {
    return (
        <section className="relative">
            <div className="flex gap-5 justify-between">
                <div className="basis-1/2 [&>*]:mb-16">
                    <h1 className="text-[87px] font-bold leading-[90px]">
                        Discover
                        <br /> And Collect
                        <br /> Rare NFTs
                    </h1>
                    <p className="text-[18px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Praesentium consectetur ullam aspernatur velit
                        recusandae, pariatur quidem earum iure eos saepe.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#8c88da] px-16 py-5 rounded-full uppercase font-bold">
                            buy nfts
                        </button>
                        <button className="px-16 py-5 rounded-full uppercase border font-bold border-[#aad8d9]">
                            sell nfts
                        </button>
                    </div>
                </div>
                <div className="basis-1/2 flex items-center justify-center">
                    <img
                        src="/hero-1.png"
                        className="w-[70%] object-cover bg-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
