import type { ExperienceType } from '@/types/ExperienceCard'
import React from 'react'

const ExperienceCard = (props : ExperienceType) => {
  return (
    <article className='flex flex-col lg:flex-row mb-7'>
        <img src={props.companyImageURL} alt='company image url'  className='mx-auto object-cover rounded w-[60vw] lg:w-[10vw] lg:h-[20vh]'/>
        <section className='px-2 py-1'>
            <h3 className='text-sm'><span className='font-semibold uppercase'>Position:</span> {props.positionTitle}</h3>
            <p className='text-sm'><span className='font-semibold uppercase'>Company:</span> {props.company}</p>
            <p className='text-sm'><span className='font-semibold uppercase'>Description:</span> {props.description}</p>
            <p className='text-sm'><span className='font-semibold uppercase'>Start date:</span> {props.startDate}</p>
            {props.isEnd && 
            <p className='text-sm'><span className='font-semibold uppercase'>End date:</span> {props.endDate}</p>
            }
        </section>
    </article>
  )
}

export default ExperienceCard