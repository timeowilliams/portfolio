import { CURRENTLY_READING, FINISHED_READING } from '../../consts'
 
const Reading = () => {
  const groupedBooks = FINISHED_READING.reduce((acc, book) => {
    const year = book.dateFinished.split('-')[0]
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(book)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedBooks).sort(
    (a, b) => parseInt(b) - parseInt(a)
  )

  const numOfBooks = FINISHED_READING.length

  return (
    <>
      <a
        href='/'
        className='flex flex-row space-x-1 text-zinc-400 text-sm items-center group'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='12.38'
          viewBox='0 0 16 9'
          className='group-hover:text-zinc-200 group-hover:-translate-x-1 duration-200'
        >
          <path
            fill='currentColor'
            d='M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z'
          ></path>
          <path
            fill='currentColor'
            d='M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z'
          ></path>
        </svg>
        <span className='group-hover:text-zinc-200'>Back</span>
      </a>
      <p className='flex flex-col space-y-2'>
        <span className='text-zinc-200 font-[600] text-4xl'>
          Currently Reading
        </span>
        <span className='text-sm text-zinc-400'>
          Here is a list of all the books I'm currently reading. Yes, I'm a
          crazy person and read different books at the same time. Last updated:
          10/08/2023
        </span>
      </p>

      <div className='flex flex-col space-y-3'>
        {' '}
        {CURRENTLY_READING.map((book, idx) => (
          <div
            key={idx}
            className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-300'
          >
            <a
              href={book.link}
              target='_blank'
              className='underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200 duration-200'
            >
              {' '}
              <span className='font-bold'>{book.title}</span>
            </a>

            <span className='text-zinc-400'>{book.author}</span>
          </div>
        ))}
      </div>

      <p className='flex flex-col space-y-2'>
        <span className='text-zinc-200 font-[600] text-4xl'>
          Finished Reading
        </span>
        <span className='text-sm text-zinc-400'>
          Here is a list of all{' '}
          <span className='font-bold text-zinc-200'>+{numOfBooks}</span> of the
          books I've read. There are probably more books I've read, but I either
          forgot them, deleted my GoodReads before I could save them somewhere,
          and more excuses. Just trust me on it :){' '}
        </span>
      </p>
      <div className='grid grid-cols-1 gap-10 text-zinc-200 pb-10'>
        {sortedYears.map((year, idx) => {
          const booksForYear = groupedBooks[year].sort((a, b) =>
            b.dateFinished.localeCompare(a.dateFinished)
          )
          return (
            <div key={idx}>
              <h2 className='font-bold text-2xl mb-2'>{year}</h2>
              {booksForYear.map((book, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-1 sm:grid-cols-4 sm:gap-4 text-sm py-2 text-zinc-300'
                >
                  <a
                    href={book.link}
                    target='_blank'
                    className='underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200 duration-200'
                  >
                    <span className='font-bold'>{book.title}</span>
                  </a>

                  <span className='text-zinc-400'>{book.author}</span>
                  <span className='text-zinc-400'>{book.dateFinished}</span>
                  <span className='text-yellow-600'>
                    {'★'.repeat(book.rating)}
                  </span>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Reading
