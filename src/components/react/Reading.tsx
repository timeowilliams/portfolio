import { READING } from '../../consts'

const Reading = () => {
  const groupedBooks = READING.reduce((acc, book) => {
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

  return (
    <div className='grid grid-cols-1 gap-10 text-zinc-200 pb-10'>
      {sortedYears.map((year, idx) => {
        const booksForYear = groupedBooks[year].sort((a, b) =>
          b.dateFinished.localeCompare(a.dateFinished)
        )
        return (
          <div key={idx}>
            <h2 className='font-bold text-xl mb-2'>{year}</h2>
            {booksForYear.map((book, idx) => (
              <div
                key={idx}
                className='grid grid-cols-1 sm:grid-cols-4 sm:gap-4 text-sm py-2 text-zinc-300'
              >
                <span>{book.title}</span>
                <p>{book.author}</p>
                <p>{book.dateFinished}</p>
                <p>{'★'.repeat(book.rating)}</p>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Reading
