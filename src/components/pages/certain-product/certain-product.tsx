import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { certainProductStore } from '../../../store/certain-product-store'
import { observer } from 'mobx-react-lite'
import BreadCrumbsTop from '../../layout/bread-crumbs-top'
import { Loader } from '../../shared/loader/loader'

type Params = { pk: string }
type Props = RouteComponentProps<Params>


export const CertainProduct = observer(({ match }: Props) => {
  const productKey = match.params.pk

  useEffect(() => {
    certainProductStore.loadProduct(productKey)
  }, [])


  return (
    <>
      <BreadCrumbsTop/>
      {
        certainProductStore.isLoading
          ? <Loader/>
          :
          <div className="card" style={{ margin: 25 }}>
            <div className="row no-gutters">
              <aside className="col-md-6">
                <img className="w-80 h-80" src={certainProductStore.product?.photo || '/images/items/1.jpg'} alt=""/>
              </aside>
              <main className="col-md-6 border-left">
                <article className="content-body">

                  <h2 className="title">{certainProductStore.product?.title}</h2>

                  <div className="mb-3">
                    <var className="price h4">{certainProductStore.product?.price}$</var>
                    <del className="price-old">{certainProductStore.product?.old_price}$</del>
                  </div>

                  <p>{certainProductStore.product?.description}</p>


                  <hr/>
                  Available quantity: {certainProductStore.product?.quantity}
                  <hr/>
                  <div className="form-row">
                    <div className="col-5 mt-1 form-group col-md flex-grow-0">
                      <label>Quantity</label>
                      <div className="mt-1 input-group mb-3 input-spinner">
                        <div className="input-group-prepend">
                          <button className="btn btn-light" type="button" id="button-minus"> -</button>
                        </div>
                        <input type="text" className="form-control" defaultValue="1"/>
                        <div className="input-group-append">
                          <button className="btn btn-light" type="button" id="button-plus"> +</button>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="ml-3 align-self-center col-3 btn btn-primary"> Buy now </a>
                    <a href="#" className="ml-3 align-self-center col-4 btn btn-outline-primary">
                      <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"/>
                    </a>
                  </div>

                </article>
              </main>
            </div>
          </div>
      }

    </>
  )
})
