type Props = {
  title: string
  description: string
  link: string
  image?: string
  status: string
}

const ProjectCard = (props: Props) => {
  const { title, description, link, image, status } = props
  return (
    <a href={link} target='_blank' className='flex flex-col space-y-1'>
      <p className='underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-100 duration-150 hover:text-zinc-100 text-zinc-200'>
        {title}
      </p>
      <p className='text-zinc-400'>{description}</p>
    </a>
  )
}

export default ProjectCard
