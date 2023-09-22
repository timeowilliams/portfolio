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
      <p className='underline underline-offset-4 decoration-zinc-500 text-zinc-400 duration-200 group-hover:text-zinc-200'>
        {title}
      </p>
      <p className='text-zinc-400 group-hover:text-zinc-200 duration-200'>
        {date}
      </p>
    </a>
  )
}

export default SpeakingCard
