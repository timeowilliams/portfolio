type Props = {
  title: string
  description: string
  link: string
  image?: string
  status: string
}

const ProjectCard = (props: Props) => {
  const { title, description, link, image, status } = props

  // Calculate the maximum number of dots based on the available space
  const maxDots = 50 // Adjust this value as needed
  const dotsCount = maxDots - (title.length + 1) // Adding 1 for the space between the title and dots

  // Generate a string of dots to fill the space
  const dots = '.'.repeat(dotsCount)

  return (
    <a
      href={link}
      target='_blank'
      className='flex flex-col  space-y-2  group items-start'
    >
      <div className='flex flex-row space-x-2 items-end'>
        <span className='inline-flex items-center justify-center flex-shrink-0 rounded z-10 relative h-5 w-5 text-base'>
          <img
            src={image}
            alt={title}
            className='rounded z-10 relative h-5 w-5 text-base'
          />
        </span>
        <div className='underline underline-offset-4 decoration-zinc-600 group-hover:decoration-zinc-50 duration-150 group-hover:text-zinc-50 text-zinc-200'>
          {title}
        </div>
      </div>
      <div>
        <p className='text-zinc-400 text-sm'>{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
