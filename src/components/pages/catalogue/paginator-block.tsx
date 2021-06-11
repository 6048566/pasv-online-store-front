import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PaginationLinks } from '../../../types/pagination'

type Props = {
  links: PaginationLinks
  pages: number
  urlPage: number
}

export const PaginatorBlock = (props: Props) => {
  const buttons: ReactNode[] = []
  let activeClass = ''
  for (let i = 1; i <= props.pages; i++) {
    activeClass = props.urlPage == i ? ' active' : ''

    buttons.push(
      <li key={i} className={'page-item' + activeClass}>
        <Link className="page-link" to={'/products/page/' + i}>{i}</Link>
      </li>
    )
  }

  return (
    <ul className="pagination">
      {props.links.previous ? (
        <li className="page-item">
          <Link className="page-link" to={'/products/page/' + props.links.previous_num_page}>Previous</Link>
        </li>
      ) : null}
      {buttons}
      {props.links.next ? (
        <li className="page-item">
          <Link className="page-link" to={'/products/page/' + props.links.next_num_page}>Next</Link>
        </li>
      ) : null}

    </ul>
  )
}


