import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode } from "react";

export default function ConsumerLayout({
    children
}: Readonly<{ children: ReactNode }>) {
    return <>
        <Navbar />
        {children}
    </>
};


function Navbar() {
    return <header className="flex h-12 shadow bg-background z-10">
        <nav className="flex gap-4 container">
            <Link className="mr-auto text-lg hover:underline px-2 flex items-center" href="/">Course platform</Link>
            <SignedIn>
                <Link className="hover:bg-accent/10 flex items-center px-2" href="/admin">Admin</Link>
                <Link className="hover:bg-accent/10 flex items-center px-2" href="/courses">My courses</Link>
                <Link className="hover:bg-accent/10 flex items-center px-2" href="/purchases">Purchase history</Link>
                <div className="size-8 self-center">
                    <UserButton appearance={{
                        elements: {
                            userButtonAvatarBox: {
                                width: "100%",
                                height: "100%",
                            }
                        }
                    }} />
                </div>
            </SignedIn>

            <SignedOut>
                <Button className="self-center" asChild>
                    <SignInButton />
                </Button>
            </SignedOut>
        </nav>
    </header>
}