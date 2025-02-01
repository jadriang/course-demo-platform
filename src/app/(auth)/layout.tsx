import React from "react";

export default async function AuthLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return <div className="min-h-screen flex flex-col justify-center items-center">
        {children}
    </div>
}