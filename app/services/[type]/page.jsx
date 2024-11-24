"use client"

import { useParams } from "next/navigation"

export default function ServicesTypePage() {
    const { type } = useParams()

    return (
        <h1>{type} Page</h1>
    )
};
