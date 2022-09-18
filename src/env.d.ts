/// <reference types="astro/client" />

// https://jsonresume.org/schema/
// Version 1.0.0

type PhysicalLocation = {
    readonly address: string;
    readonly postalCode: string;
    readonly city: string;
    readonly countryCode: string;
    readonly region: string;
};

type Profile = {
    readonly network: string;
    readonly username: string;
    readonly url: string;
};

type Basics = {
    readonly name: string;
    readonly label: string;
    readonly image: string;
    readonly email: string;
    readonly phone: string;
    readonly url: string;
    readonly summary: string;
    readonly location: PhysicalLocation;
    readonly profiles: Profile[];
};

type Job = {
    readonly name: string;
    readonly position: string;
    readonly url: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly summary: string;
    readonly highlights: string[];
    readonly images: string[]; // Custom field
};

type Organization = {
    readonly organization: string;
    readonly position: string;
    readonly url: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly summary: string;
    readonly highlights: string[];
};

type School = {
    readonly institution: string;
    readonly url: string;
    readonly area: string;
    readonly studyType: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly score: string;
    readonly courses: string[];
    readonly images: string[]; // Custom field
};

type Award = {
    readonly title: string;
    readonly date: string;
    readonly awarder: string;
    readonly summary: string;
};

type Certificate = {
    readonly name: string;
    readonly date: string;
    readonly issuer: string;
    readonly url: string;
};

type Publication = {
    readonly name: string;
    readonly publisher: string;
    readonly releaseDate: string;
    readonly url: string;
    readonly summary: string;
};

type Skill = {
    readonly name: string;
    readonly level: string;
    readonly keywords: string[];
};

type Language = {
    readonly language: string;
    readonly fluency: string;
};

type Interest = {
    readonly name: string;
    readonly keywords: string[];
};

type Reference = {
    readonly name: string;
    readonly reference: string;
};

type Project = {
    readonly name: string;
    readonly description: string;
    readonly highlights: string[];
    readonly keywords: string[];
    readonly startDate: string;
    readonly endDate: string;
    readonly url: string;
    readonly roles: string[];
    readonly entity: string;
    readonly type: string;
};

type Resume = {
    readonly basics: Basics;
    readonly work: Job[];
    readonly volunteer: Organization[];
    readonly education: School[];
    readonly awards: Award[];
    readonly certificates: Certificate[];
    readonly publications: Publication[];
    readonly skills: Skill[];
    readonly languages: Language[];
    readonly interests: Interest[];
    readonly references: Reference[];
    readonly projects: Project[];
};
