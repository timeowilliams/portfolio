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
    <div className='card bg-base-100 duration-200 h-min'>
      <a
        className='block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'
        href={link}
        target='_blank'
      >
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center space-x-2'>
              <img
                alt='Logo'
                className='w-6 h-6 lg:w-8 lg:h-8 duration-200 drop-shadow-sm object-cover group-hover:-rotate-12 delay-100'
                src={image}
              />
              <p className='font-bold text-lg'>{title}</p>
            </div>
            {status === 'Building' && (
              <span className='text-xs bg-blue-600 px-2 rounded-full font-medium animate-pulse'>
                {status}
              </span>
            )}
            {status === 'Active' && (
              <span className='text-xs bg-green-600 px-2 rounded-full font-medium'>
                {status}
              </span>
            )}
          </div>
          <p className='text-sm lg:text-base text-zinc-400 pt-1 md:pt-2'>
            {description}
          </p>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
