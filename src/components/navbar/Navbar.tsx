const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-8">
                <a href="#" className="font-bold uppercase text-xl">
                    Krypto
                </a>
                <div className="flex-grow-[1]">
                    <ul className="flex justify-end items-end [&>*]:ml-8">
                        <li>
                            <a>about</a>
                        </li>
                        <li>
                            <a>pricing</a>
                        </li>
                        <li>
                            <a>contacts</a>
                        </li>
                        <li>
                            <a>buy nfts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
