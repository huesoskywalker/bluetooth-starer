"use client"

import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { useEffect } from "react"

export interface PageProps {
    params?: any
    children?: React.ReactNode
}

const Auth = ({ children }: PageProps) => {
    const router: AppRouterInstance = useRouter()
    const { data: session, status } = useSession()
    const isUser = session?.user
    useEffect(() => {
        if (status === "loading") return
        if (!isUser) router.push("/")
    }, [isUser, status])

    return <>{children}</>
}
export default function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Auth>{children}</Auth>
        </SessionProvider>
    )
}
