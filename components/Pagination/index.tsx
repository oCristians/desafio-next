'use client'
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page') || 1)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <div className="flex justify-center items-center gap-2.5 p-2.5 rounded-lg">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'middle' | undefined

        if (index === 0) position = 'first'
        if (index === allPages.length - 1) position = 'last'
        if (allPages.length === 1) position = 'single'
        if (page === '...') position = 'middle'

        return (
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        )
      })}

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string
  href: string
  position?: 'first' | 'last' | 'middle' | 'single'
  isActive: boolean
}) {
  const className = `flex justify-center items-center w-11 h-11 p-2.5 rounded-lg bg-[#643d2a] ${
    isActive ? 'text-white text-2xl font-bold' : 'text-gray-300'
  }`

  return isActive || position === 'middle' ? (
    <div className={className}>
      <p className="text-2xl font-bold text-white">{page}</p>
    </div>
  ) : (
    <Link href={href} className={className}>
      <p className="text-2xl font-bold text-white">{page}</p>
    </Link>
  )
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) {
  const className = `flex justify-center items-center w-11 h-11 p-2.5 rounded-lg bg-[#643d2a] text-white text-2xl font-bold ${
    isDisabled ? 'pointer-events-none bg-[#695348]' : ''
  }`

  const icon = direction === 'left' ? (
    <i className="bi bi-arrow-left-circle-fill w-4"></i>
  ) : (
    <i className="bi bi-arrow-right-circle-fill w-4"></i>
  )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}

const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}
