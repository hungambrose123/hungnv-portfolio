export type ProjectCard = {
    projectImageURL: string,
    projectName:string,
    projectDescription: string,
    projectTechnologies: {
        name: string,
        imageUrl: string,
    }[],
    accessURL: {
        name: string,
        url: string,
        imageURL: string,
    }[]

}

