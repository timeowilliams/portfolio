type Props = {
  title: string
  date: string
  video: string
}

const SpeakingCard = (props: Props) => {
  const { title, date, video } = props
  return (
    <a
      href={video}
      target='_blank'
      className='flex flex-row justify-between items-center group duration-200'
    >
      <p className='underline underline-offset-4 decoration-zinc-600 group-hover:decoration-zinc-50 duration-150 group-hover:text-zinc-50 text-zinc-200'>
        {title}
      </p>
      <p className='text-zinc-400 group-hover:text-zinc-200 duration-200'>
        {date}
      </p>
    </a>
  )
}

export default SpeakingCard
