export type ProjectCard = {
    projectImageURL: string,
    projectName:string,
    projectDescription: string,
    projectTechnologies: {
        name: string,
        imageUrl: string,
    }[],

}

