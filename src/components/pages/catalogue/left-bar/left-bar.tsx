import React from 'react'
import { CategoriesList } from './categories-list'
import { BrandsList } from './brands-list'
import { PriceRangeForm } from './price-range-form'

export const LeftBar = () => {
  return (
    <>
      <aside className="col-md-3">
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true">
                <i className="icon-control fa fa-chevron-down"/>
                <h6 className="title">Product type</h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_1" style={{}}>
              <div className="card-body">
                <form className="pb-3">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="input-group-append">
                      <button className="btn btn-light" type="button"><i
                        className="fa fa-search"/>
                      </button>
                    </div>
                  </div>
                </form>
                <CategoriesList/>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true">
                <i className="icon-control fa fa-chevron-down"/>
                <h6 className="title">Brands </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_2" style={{}}>
              <BrandsList/>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true">
                <i className="icon-control fa fa-chevron-down"/>
                <h6 className="title">Price range </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_3" style={{}}>
              <PriceRangeForm/>
            </div>
          </article>

        </div>
      </aside>
    </>
  )
}


