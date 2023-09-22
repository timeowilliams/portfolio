import SpeakingCard from './SpeakingCard'
import { SPEAKING } from '../../consts'

const Speaking = () => {
  return (
    <div className='grid grid-cols-1 gap-4 text-sm'>
      {SPEAKING.map((speech, idx) => {
        return (
          <SpeakingCard
            key={idx}
            title={speech.title}
            date={speech.date}
            video={speech.video}
          />
        )
      })}
    </div>
  )
}

export default Speaking
