import "./globals.css"
import AuthProvider from "./AuthProvider"
import GlobalNav from "./GlobalNav"

export const metadata = {
    title: "Bluetooth Gateway",
    description: "Does connect through bluetooth",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className="overflow-y-scroll bg-gray-900">
                <AuthProvider>
                    <GlobalNav />
                    <div className="xl:pl-44 lg:pl-40">
                        <div className="mx-auto max-w-4xl px-2 pt-20 pb-8 lg:py-8 lg:px-8">
                            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                                <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
                            </div>
                        </div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
}
