"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function GlobalNav() {
    const { data: session, status } = useSession()

    if (status === "unauthenticated") {
        return (
            <div className="fixed top-0 flex z-10 xl:w-48 flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-10 lg:w-40 lg:border-r lg:border-gray-800">
                <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
                    <Link
                        href="#"
                        data-test="signIn"
                        onClick={() => signIn()}
                        className="group flex w-full items-center space-x-2.5"
                    >
                        <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
                            <span className="Work in progress">Sign in</span>
                        </h3>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="fixed top-0 z-100 flex xl:w-44 bottom-0 flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-40 lg:border-r lg:border-gray-800">
                <div className="overflow-y-auto lg:static lg:block">
                    <nav className="space-y-6 px-2 py-5">
                        {session ? (
                            <div>
                                <Link
                                    href="/"
                                    onClick={() => signOut()}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                                >
                                    Sign out
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    href="#"
                                    onClick={() => signIn()}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                                >
                                    Sign in
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        )
    }
}
