// https://jsonresume.org/schema/
// Version 1.0.0

type PhysicalLocation = {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
};

type Profile = {
    network: string;
    username: string;
    url: string;
};

type Basics = {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: PhysicalLocation;
    profiles: Profile[];
};

type Job = {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
    pictures: string[]; // Custom field
};

type Organization = {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
};

type School = {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
    pictures: string[]; // Custom field
};

type Award = {
    title: string;
    date: string;
    awarder: string;
    summary: string;
};

type Certificate = {
    name: string;
    date: string;
    issuer: string;
    url: string;
};

type Publication = {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
};

type Skill = {
    name: string;
    level: string;
    keywords: string[];
};

type Language = {
    language: string;
    fluency: string;
};

type Interest = {
    name: string;
    keywords: string[];
};

type Reference = {
    name: string;
    reference: string;
};

type Project = {
    name: string;
    description: string;
    highlights: string[];
    keywords: string[];
    startDate: string;
    endDate: string;
    url: string;
    roles: string[];
    entity: string;
    type: string;
};

type Resume = {
    basics: Basics;
    work: Job[];
    volunteer: Organization[];
    education: School[];
    awards: Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: Reference[];
    projects: Project[];
};
