import Link from "next/link";
import SearchBar from "../UI/SearchBar";
import SolidButton from "../UI/SolidButton";
import OutlinedButton from "../UI/OutlinedButton";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-primary font-black text-2xl" href="/">
              NFTERS
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-600 transition font-semibold text-md hover:text-primary/75"
                    href="/"
                  >
                    {" "}
                    Marketplace{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-600 transition font-semibold text-md hover:text-primary/75"
                    href="/"
                  >
                    {" "}
                    Resources{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-600 transition font-semibold text-md hover:text-primary/75"
                    href="/"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <SearchBar />
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <SolidButton name="Upload" url="/" />

              <OutlinedButton name="Connect Wallet" url="/" />
            </div>

            <div className="block md:hidden">
              <button className=" hover:text-primary/75">
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
