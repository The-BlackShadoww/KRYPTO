const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-5">
                <div>
                    <h1 className="uppercase font-bold mb-4">Krypto</h1>
                </div>
                <div>
                    <h1 className="uppercase font-bold mb-4">Krypto</h1>
                    <ul className="[&>*]:mb-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Buy NFTs</li>
                        <li>Sell NFTs</li>
                    </ul>
                </div>
                <div>
                    <h1 className="uppercase font-bold mb-4">Market</h1>
                    <ul className="[&>*]:mb-2">
                        <li>Browse NFTs</li>
                        <li>Buy NFTs</li>
                        <li>Sell NFTs</li>
                    </ul>
                </div>
                <div>
                    <h1 className="uppercase font-bold mb-4">Contact</h1>
                    <ul className="[&>*]:mb-2">
                        <li>Email</li>
                        <li>Linkedin</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div>
                    <h1 className="uppercase font-bold mb-4">
                        Join Our Newsletter
                    </h1>
                    <form className="bg-[#9190CD]/50 px-5 rounded-full flex justify-between">
                        <input
                            placeholder="Email"
                            className="bg-transparent outline-none p-2"
                        />
                        <button className="bg-[#9190CD] px-10 py-5 rounded-full uppercase font-bold">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
