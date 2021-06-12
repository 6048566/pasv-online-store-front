import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import LeftBar from './left-bar'
import { toJS } from 'mobx'
import { PaginatorBlock } from './paginator-block'
import BreadCrumbsTop from '../../layout/bread-crumbs-top'
import { RouteComponentProps } from 'react-router-dom'
import { ProductItem } from './product-item'
import { catalogueStore } from '../../../store/catalogue-store'

type Params = { page: string }
type Props = RouteComponentProps<Params>


const Catalogue = ({ match }: Props) => {

  const page = Number(!match.params.page ? 1 : match.params.page)

  // const query = useQuery()
  // const minPrice = query.get('min-price')

  useEffect(() => {
    catalogueStore.loadAllProductsData(page)
  }, [page])

  let listItems

  const store = toJS(catalogueStore.productsList)

  if (!catalogueStore.isProductsListLoading) {
    listItems = store.result.map((item) =>
      <ProductItem item={item} key={item.id}/>
    )
  }

  return (
    <>
      <BreadCrumbsTop/>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <LeftBar/>
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">{store.count} Items found </span>
                  <select className="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div className="btn-group">
                    <a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="List view">
                      <i className="fa fa-bars"/></a>
                    <a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view">
                      <i className="fa fa-th"/></a>
                  </div>
                </div>
              </header>
              <div className="row">
                {listItems}
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <PaginatorBlock
                  links={store.links}
                  pages={store.pages}
                  urlPage={page}
                />
              </nav>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default observer(Catalogue)
