import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string,
    children: ReactNode
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        console.log("Mounted on client");
        setIsMounted(true);
    }, []);

    console.log("Rendering on server/client");

    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {isMounted ? children : null}
        </div>
    )
}

export default MaxWidthWrapper;
