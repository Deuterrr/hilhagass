import type { Metadata } from "next";
import "./global.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/roboto-mono/500.css";

import CustomCursor from "@/src/components/CustomCursor";
import PageLoaderWrapper from "@/src/components/PageLoaderWrapper";

export const metadata: Metadata = {
    title: "Hilhagass - 2026 Portfolio",
    description: "Developer that write code, design systems, and occasionally wrestle with bugs that refuse to d*e"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <CustomCursor />
                <PageLoaderWrapper>{children}</PageLoaderWrapper>
            </body>
        </html>
    )
}