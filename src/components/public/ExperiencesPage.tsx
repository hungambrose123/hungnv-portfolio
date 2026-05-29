import experiences from "../../data/experiences.json";
import ExperienceCard from "../section/ExperienceCard";

const ExperiencesPage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>
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