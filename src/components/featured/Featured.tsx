const Featured = () => {
    return (
        <section>
            <h4 className="text-[20px] font-semibold mb-5">Featured</h4>
            <div className="w-full flex justify-between px-20 py-10 bg-[#63588d]/20 rounded-xl [&>*]:opacity-50 [&>*]:h-[80px] [&>*]:w-[200px]">
                <img src="/tech_c.png" />
                <img src="/hopin.png" />
                <img src="/cx.png" />
                <img src="/deezer.png" />
            </div>
        </section>
    );
};

export default Featured;
