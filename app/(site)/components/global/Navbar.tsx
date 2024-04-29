import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
          <li>
              <Link
                href="/"
                className="hover:text-purple-400 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-purple-400 duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-purple-400 duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/CreateUser"
                className="hover:text-purple-400 duration-300"
              >
                Create User
              </Link>
            </li>
            <li>
              {session?.user?.name == "admin" ? (
                <Link href="./studio">Admin Section</Link>
              ) : null}

            </li>
            <li>
              {session ? (
                <Link href="/api/auth/signout?callbackUrl=/">Welcome: {session?.user?.name} | Logout</Link>
              ) : (
                <Link href="/api/auth/signin">Login</Link>
              )}

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
