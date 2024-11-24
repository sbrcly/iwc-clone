"use client"

import { useParams } from "next/navigation"

export default function WatchTypePage() {
    const { type } = useParams()

    return (
        <h1>{type} Page</h1>
    )
};
