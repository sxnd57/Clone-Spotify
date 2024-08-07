import Image from "next/image";
import brandImageDark from "assets/images/sxnd-dark.png";
import brandImageLight from "assets/images/sxnd-light.png";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import ModeSwitch from "@/components/theme-switch-mode";
import { Github } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>
        <div className="flex h-screen flex-col">
          <div className="flex items-center justify-between px-6 py-3 border-b">
            <div className="logoBrand">
              <Image
                className="hidden dark:block"
                src={brandImageLight}
                width={52}
                alt="Logo"
              />
              <Image
                className="block dark:hidden"
                src={brandImageDark}
                width={52}
                alt="Logo"
              />
            </div>
            <div className="btn-group">
              <Button
                className="mx-1 text-gray-500 hover:bg-transparent"
                variant={"ghost"}
              >
                Contact
              </Button>
              <Button className="mx-1" variant={"outline"}>
                Sign in
              </Button>
            </div>
          </div>
          <div className="flex-1">{children}</div>
          <div className="border-y p-8 text-center">
            <Link
              className="text-blue-700 font-semibold"
              href={"#"}
            >
              Don't have account ? Sign In
            </Link>
          </div>
        </div>
        <div className="container px-6 pb-8 pt-7">
          <div className="flex items-center justify-between">
            <div className="logoBrand flex items-center text-sm font-medium text-gray-500">
              <Image
                className="me-1 hidden dark:block"
                src={brandImageLight}
                width={32}
                alt="Logo"
              />
              <Image
                className="me-1 block dark:hidden"
                src={brandImageDark}
                width={32}
                alt="Logo"
              />
              &copy; 2024
            </div>
            <ModeSwitch />
          </div>
          <section className="mt-5">
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <Github />
              </li>

              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Home</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Document</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Guides</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Help</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Contact Sales</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Blog</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Changelog</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Pricing</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Enterprise</Link>
                </Button>
              </li>
              <li>
                <Button variant={"link"} className="text-sm font-[400] text-gray-300">
                  <Link href={"#"}>Legal</Link>
                </Button>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
}
