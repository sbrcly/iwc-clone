import Image from "next/image"

import heroImg from "@/public/hero.jpeg"

export default function PrimaryLinkDropdown({ item }) {
    return (
        <>
            <h1>{item}</h1>
            <Image
                src={heroImg}
                width={200}
                alt="Green Portofino Watch"
            />
        </>
    )
};
