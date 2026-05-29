import experiences from "../../data/experiences.json";
import ExperienceCard from "../section/ExperienceCard";

const ExperiencesPage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2 h-[60vh] mx-3 lg:mx-40'>
      <h1 className="text-md lg:text-2xl text-center mb-2 sectionTitle">Experiences</h1>
      {experiences.length > 0 ? experiences.map(exp => (
        <ExperienceCard positionTitle={exp.positionTitle}
          company={exp.company}
          companyImageURL={exp.companyImageURL}
          description={exp.description}
          startDate={exp.startDate}
          isEnd={exp.isEnd}
          endDate={exp.endDate}
        />
      ))
        :
        "Loading experiences"}
    </main>
  )
}

export default ExperiencesPage