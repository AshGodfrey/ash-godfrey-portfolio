import { ExperienceList } from '../../lib/experience'

export default function Experience() {
    return (
      <div>
        <div>
            {ExperienceList.map((job, index) => (
                <div key={index} className="job">
                    <h2>{job.title}</h2>
                    <h3>{job.company}</h3>
                    <p>Start Date: {job.start_date}</p>
                    <p>End Date: {job.end_date}</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>

      </div>
    )
  }
  