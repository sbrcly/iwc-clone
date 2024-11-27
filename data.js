import { MdOutlineShoppingBag } from "react-icons/md"

export const HEADER_OPTIONS = {
    watches: {
        title: "Watch Families",
        tiles: [
            {
                id: '1',
                title: "Pilot's Watches",
                image: "/images/watches/pilots/pilot_hero.avif",
                altImage: "/images/watches/pilots/pilot_hero_alt.avif",
                href: "/watches/pilot-watches"
            },
            {
                id: '2',
                title: "Portugieser",
                image: "/images/watches/portugieser/portugieser_hero.avif",
                altImage: "/images/watches/portugieser/portugieser_hero_alt.avif",
                href: "/watches/portugieser-watches"
            },
            {
                id: '3',
                title: "Portofino",
                image: "/images/watches/portofino/portofino_hero.avif",
                altImage: "/images/watches/portofino/portofino_hero_alt.avif",
                href: "/watches/portofino-watches"
            },
            {
                id: '4',
                title: "Ingenieur",
                image: "/images/watches/ingenieur/ingenieur_hero.avif",
                altImage: "/images/watches/ingenieur/ingenieur_hero_alt.avif",
                href: "/watches/ingenieur-watches"
            },
            {
                id: '5',
                title: "Aquatimer",
                image: "/images/watches/aquatimer/aquatimer_hero.avif",
                altImage: "/images/watches/aquatimer/aquatimer_hero_alt.avif",
                href: "/watches/aquatimer-watches"
            },
            {
                id: 'all',
                title: "All Watches",
                image: "/images/watches/all/all_watches_hero.avif",
                href: "/watches"
            },
        ],
        linkLists: [
            {
                id: "1",
                title: "Special Collections",
                links: [
                    {
                        id: "1",
                        content: "Portugieser Eternal Calendar",
                        href: "/"
                    },
                    {
                        id: "2",
                        content: "The Portugieser Novelties",
                        href: "/"
                    },
                    {
                        id: "3",
                        content: "Colored Ceramics",
                        href: "/"
                    },
                    {
                        id: "4",
                        content: "Chronograph Watches",
                        href: "/"
                    }
                ]
            }
        ]
    },
    accessories: {
        title: "Accessories",
        tiles: [
            {
                id: '1',
                title: "Straps & Bracelets",
                image: "/images/accessories/straps-bands/straps_bracelets_hero.avif",
                href: "/accessories/straps"
            },
            {
                id: '2',
                title: "Buckles & Clasps",
                image: "/images/accessories/buckles-clasps/buckles_clasps_hero.avif",
                href: "/accessories/buckles"
            },
            {
                id: '3',
                title: "Watch Boxes",
                image: "/images/accessories/boxes/boxes_hero.avif",
                href: "/accessories/boxes"
            },
        ],
        linkLists: [
            {
                id: "1",
                title: "More Accessories",
                links: [
                    {
                        id: "1",
                        content: "Strap Materials",
                        href: "/"
                    },
                    {
                        id: "2",
                        content: "Quick Change System",
                        href: "/"
                    },
                    {
                        id: "3",
                        content: "Trace Your Strap",
                        href: "/"
                    }
                ]
            }
        ]
    },
    service: {
        title: "Service",
        tiles: [
            {
                id: '1',
                title: "Service Types",
                image: "/images/service/types/types_hero.avif",
                href: "/services/our-services"
            },
            {
                id: '2',
                title: "Service Price Calculator",
                image: "/images/service/price/price_hero.avif",
                href: "/services/service-price-calculator"
            },
            {
                id: '3',
                title: "Care Advice",
                image: "/images/service/advice/advice_hero.avif",
                href: "/services/care-advice"
            },
            {
                id: '4',
                title: "Extend Your Warranty",
                image: "/images/service/warranty/warranty_hero.avif",
                href: "/services/my-iwc"
            },
        ],
        linkLists: [
            {
                id: "1",
                title: "Other Services",
                links: [
                    {
                        id: "1",
                        content: "Warranties",
                        href: "/"
                    },
                    {
                        id: "2",
                        content: "Service FAQ",
                        href: "/"
                    },
                    {
                        id: "3",
                        content: "Trade In Service",
                        href: "/"
                    }
                ]
            }
        ]
    },
    more: {
        title: "Visit Us",
        tiles: [
            {
                id: '1',
                title: "Find A Botique",
                image: "/images/more/botique/botique_hero.webp",
                href: "/stores"
            },
            {
                id: '2',
                title: "Book An Appointment",
                image: "/images/more/appointment/appointment_hero.webp",
                href: "/appointments"
            },
            {
                id: '3',
                title: "IWC Museum",
                image: "/images/more/museum/museum_hero.avif",
                href: "/museum"
            }
        ],
        linkLists: [
            {
                id: "1",
                title: "Inspiration",
                links: [
                    {
                        id: "1",
                        content: "The Journal",
                        href: "/"
                    },
                    {
                        id: "2",
                        content: "Podcast",
                        href: "/"
                    },
                    {
                        id: "3",
                        content: "Partnerships",
                        href: "/"
                    },
                    {
                        id: "4",
                        content: "Forum",
                        href: "/"
                    },
                    {
                        id: "5",
                        content: "IWC X Wev3",
                        href: "/"
                    },
                    {
                        id: "6",
                        content: "Complications",
                        href: "/"
                    },
                    {
                        id: "7",
                        content: "Calibres",
                        href: "/"
                    },
                ]
            },
            {
                id: "2",
                title: "About IWC",
                links: [
                    {
                        id: "1",
                        content: "Our History",
                        href: "/"
                    },
                    {
                        id: "2",
                        content: "Sustainability",
                        href: "/"
                    },
                    {
                        id: "3",
                        content: "IWC App",
                        href: "/"
                    },
                    {
                        id: "4",
                        content: "Collections Archive",
                        href: "/"
                    }
                ]
            }
        ]
    }
}

export const NAV_PATH_ITEMS = [
    { id: 'watches', content: 'Watches' },
    { id: 'accessories', content: 'Accessories' },
    { id: 'service', content: 'Service' },
    { id: 'more', content: 'More' }
]

export const NAV_BUTTON_ITEMS = [
    { id: 'search', content: 'Search' },
    { id: 'account', content: 'Account' },
    { id: 'cart', content: <MdOutlineShoppingBag /> }
]