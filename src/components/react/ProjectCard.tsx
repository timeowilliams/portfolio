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
    <div className='flex flex-col space-y-2'>
      <img src={image} alt='' class='h-6 w-6 shadow-lg' />
      <div class='flex flex-col'>
        <a href={link} target='_blank' className='underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-100 duration-150 hover:text-zinc-100 text-zinc-200'>
          {title}
        </a>
        <p className='text-zinc-400'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
