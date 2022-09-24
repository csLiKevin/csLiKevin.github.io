export const resume: Resume = {
    basics: {
        name: "Kevin Li",
        label: "Software Engineer",
        image: "",
        email: "",
        phone: "",
        url: "https://kevinli.us",
        summary: "",
        location: {
            address: "",
            postalCode: "",
            city: "Brooklyn",
            countryCode: "US",
            region: "New York",
        },
        profiles: [
            {
                network: "GitHub",
                username: "csLiKevin",
                url: "https://github.com/csLiKevin",
            },
            {
                network: "LinkedIn",
                username: "csLiKevin",
                url: "https://www.linkedin.com/in/cslikevin",
            },
        ],
    },
    work: [
        {
            name: "Meta (Facebook)",
            position: "Senior Software Engineer",
            url: "https://about.meta.com/",
            startDate: "2022-05-16",
            endDate: "",
            summary:
                "Meta builds technologies that help people connect, find communities, and grow businesses.",
            highlights: [],
            images: ["/images/logo-meta.png"],
        },
        {
            name: "Compass (Urban Compass)",
            position: "Senior Software Engineer",
            url: "https://www.compass.com/",
            startDate: "2019-08-26",
            endDate: "2022-05-06",
            summary:
                "Compass is a real estate technology company with a powerful end-to-end platform that supports the entire buying and selling workflow. We deliver an incomparable experience to both agents and their clients all in service of the Compass mission: to help everyone find their place in the world.",
            highlights: [
                "Tech lead for the authentication squad.",
                "Mentored junior engineers and set priorities for the team.",
                "Created service unifying access to authorization data.",
                "Evaluated identity providers and integrated the chosen identity provider.",
                "Captured our identity provider settings in code, setup a deployment pipeline, and codified development workflow.",
                "Worked with other teams to design and integrate invitation flows for their features.",
                "Unified authentication systems with subsidiaries.",
                "Added Passwordless authentication feature for agents to protect agents from phishing attempts.",
                "Revamped authentication flow by adding new login methods and a new user interface. Login success rate went from 82% to over 95%.",
                "Fixed security issues in our authentication flows.",
            ],
            images: ["/images/logo-compass.jpg"],
        },
        {
            name: "The Orchard (Sony Music Entertainment)",
            position: "Software Engineer",
            url: "https://www.theorchard.com/",
            startDate: "2017-06-19",
            endDate: "2019-08-23",
            summary:
                "The Orchard is a leading music, film and video distribution company operating in over 30 markets worldwide. With a comprehensive artist & label services offering including full-service marketing, sync licensing, video services, transparent data analysis, advertising, rights management, digital and physical distribution and more, The Orchard empowers creators and businesses to grow and adapt in the dynamic global industry.",
            highlights: [
                "Created functionality for clients to update metadata of releases post distribution.",
                "Created a unique artist catalog by overhauling the UI for capturing artist metadata and deduping the existing artist catalog.",
                "Implemented features required to become an Apple Preferred Plus and Spotify Preferred music distributor.",
                "Implemented features to support becoming one of the first companies in the music industry to become an ISNI (International Standard Name Identifier) registration agency.",
                "Improved application performance by reducing the size of Javascript files served to clients by 75% and eliminating redundant API calls.",
                "Decreased build times by 66% by optimizing internationalization feature.",
                "Moved platform towards a single page app structure to improve performance.",
                "Migrated test suite to Jest.",
            ],
            images: [
                "/images/logo-the-orchard.png",
                "/images/logo-sony-music.jpg",
            ],
        },
        {
            name: "Wyng (Offerpop)",
            position: "Software Engineer",
            url: "https://www.wyng.com/",
            startDate: "2015-07-22",
            endDate: "2017-06-16",
            summary:
                "Wyng builds technology that powers compelling digital campaigns and promotions for agencies and brands. In 2011, Wyng powered the first ever hashtag campaign in connection with a Super Bowl ad, and continues to evolve its platform to align with shifts in consumer behavior.",
            highlights: [
                "Provided clients transparency into campaign performance by aggregating millions of events a day into a personalized analytics dashboard.",
                "Streamlined our onboarding process by decoupling integrations with obsolete authentication systems.",
                "Designed and created a user authentication system and migrated all our users.",
                "Created a template system to decrease the time between onboarding and when a client creates their first campaign.",
                "Modernized platform by creating UI based on Material design written with React and Redux. Replaced old monolithic code with microservices that were easier to maintain.",
            ],
            images: ["/images/logo-wyng.png", "/images/logo-offerpop.png"],
        },
        {
            name: "PivotalPath (Gallatin Advisers)",
            position: "Software Engineer",
            url: "https://www.pivotalpath.com/",
            startDate: "2013-07-01",
            endDate: "2015-03-20",
            summary:
                "PivotalPath is a hedge fund intelligence organization built by a team of experienced allocators and technologists. The firm evaluates investments from an allocator's perspective and provides comprehensive ratings on 1,500+ funds, accounting for over 90% of global hedge fund assets.",
            highlights: [
                "First engineer hire; built and designed codebase.",
                "Developed client facing platform for accessing our hedge fund research.",
                "Created tool for converting word documents into web pages.",
                "Added functionality for clients to download personalized PDFs of hedge fund profiles.",
                "Setup cloud infrastructure and automation for our platform.",
            ],
            images: ["/images/logo-pivotalpath.jpg"],
        },
        {
            name: "Maimonides Medical Center",
            position: "Medical Records Clerk",
            url: "https://www.maimonidesmed.org/",
            startDate: "2011-07",
            endDate: "2011-09",
            summary:
                "The Hospital Information Services Department of Maimonides Medical Center is responsible for maintaining the medical records of patients.",
            highlights: [
                "Maintain and organize medical records.",
                "Identify medical records that are incomplete and coordinate with physicians for reviews.",
                "Assist physicians in locating their patient's medical records.",
                "Handle sensitive medical information professionally.",
            ],
            images: ["/images/logo-maimonides-medical-center.png"],
        },
    ],
    volunteer: [
        {
            organization: "",
            position: "",
            url: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""],
        },
    ],
    education: [
        {
            institution: "Stony Brook University",
            url: "https://www.stonybrook.edu/",
            area: "Computer Science",
            studyType: "Bachelor",
            startDate: "2009-08-31",
            endDate: "2013-05-22",
            score: "3.46",
            courses: [],
            images: ["/images/logo-stony-brook-university.png"],
        },
        {
            institution: "Stony Brook University",
            url: "https://www.stonybrook.edu/",
            area: "Applied Mathematics and Statistics",
            studyType: "Bachelor",
            startDate: "2009-08-31",
            endDate: "2013-05-22",
            score: "3.46",
            courses: [],
            images: ["/images/logo-stony-brook-university.png"],
        },
    ],
    awards: [
        {
            title: "",
            date: "",
            awarder: "",
            summary: "",
        },
    ],
    certificates: [
        {
            name: "",
            date: "",
            issuer: "",
            url: "",
        },
    ],
    publications: [
        {
            name: "",
            publisher: "",
            releaseDate: "",
            url: "",
            summary: "",
        },
    ],
    skills: [
        {
            name: "",
            level: "",
            keywords: [""],
        },
    ],
    languages: [
        {
            language: "English",
            fluency: "Native speaker",
        },
    ],
    interests: [
        {
            name: "",
            keywords: [""],
        },
    ],
    references: [
        {
            name: "",
            reference: "",
        },
    ],
    projects: [
        {
            name: "",
            description: "",
            highlights: [""],
            keywords: [""],
            startDate: "",
            endDate: "",
            url: "",
            roles: [""],
            entity: "",
            type: "",
        },
    ],
};
