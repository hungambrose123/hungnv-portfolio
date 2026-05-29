import CertificationCard from "../section/CertificationCard"
import certifications from "../../data/certifications.json"

const CertificationsPage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>
      {/* certifications */}
      <h1 className="text-md lg:text-2xl text-center mb-2 sectionTitle">Cerifications</h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {certifications.length > 0 ? certifications.map(certification => (
          <CertificationCard cerName={certification.cerName} 
          cerDescription={certification.cerDescription} 
          cerImageURL={certification.cerImageURL} 
          cerURL={certification.cerURL} 
          dateAcquired={certification.dateAcquired} 
          cerGiver={certification.cerGiver} 
          cerPlatform={certification.cerPlatform} />
        )) : "Loading certifications"}
      </section>
       {/* certifications */}
    </main>
  )
}

export default CertificationsPage