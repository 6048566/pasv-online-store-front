import React from 'react'
import { Countries } from './counties'
import { SubmitHandler, useForm } from 'react-hook-form'
import { finalizeOrderStore } from '../../../store/finalize-order'
import { Loader } from '../../shared/loader/loader'
import { ErrorDisplay } from '../../shared/error-display'
import { observer } from 'mobx-react-lite'

export interface IFormInput {
  first_name: string,
  last_name: string,
  email: string,
  post_code: number,
  phone: number,
  country: string,
  city: string,
  address: string
}

export const OrderDeliveryForm = observer(() => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
    finalizeOrderStore.finalizeOrder(data).then(() => console.log('Success'))
  }

  return (
    <div>
      <aside className="col-md-6 container" style={{ marginTop: 10, marginBottom: 10 }}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Delivery info</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col form-group">
                  <label>First name</label>
                  <input
                    {
                      ...register('first_name', { required: true, maxLength: 50 })
                    }
                    type="text" className="form-control" placeholder="First name"/>
                  {errors?.first_name?.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                  {errors?.first_name?.type === 'maxLength' && (
                    <p style={{ color: 'red' }}>First name cannot exceed 50 characters</p>)}
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Last name</label>
                  <input
                    {
                      ...register('last_name', { required: true, maxLength: 100 })
                    }
                    type="text" className="form-control" placeholder="Last name"/>
                  {errors?.last_name?.type === 'required' &&
                  <p style={{ color: 'red' }}>This field is required</p>}
                  {errors?.last_name?.type === 'maxLength' && (
                    <p style={{ color: 'red' }}>Last name cannot exceed 100 characters</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Email</label>
                  <input
                    {
                      ...register('email', {
                        required: true,
                        pattern: /^\S+@\S+$/i
                      })
                    }
                    type="email" className="form-control" placeholder="reciki5478@greenkic.com"/>
                  {errors?.email?.type === 'required' &&
                  <p style={{ color: 'red' }}>This field is required</p>}
                  {errors?.email?.type === 'pattern' && (
                    <p style={{ color: 'red' }}>Alphabetical characters only</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Postcode</label>
                  <input
                    {
                      ...register('post_code', { required: true })
                    }
                    type="text" className="form-control" placeholder="00210"/>
                  {errors?.post_code?.type === 'required' &&
                  <p style={{ color: 'red' }}>This field is required</p>}
                </div>
                <div className="col form-group">
                  <label>Phone</label>
                  <input
                    pattern="\d{3}\d{3}\d{4}"
                    {...register('phone', { required: true, minLength: 6, maxLength: 12 })}
                    type="text" className="form-control" placeholder="1302461037"/>
                  {errors?.phone?.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                  {errors?.phone?.type === 'minLength' && (
                    <p style={{ color: 'red' }}>Phone cannot be less than 6 characters</p>)}
                  {errors?.phone?.type === 'maxLength' && (
                    <p style={{ color: 'red' }}>Phone cannot exceed 12 characters</p>)}
                  {errors?.phone?.type === 'pattern' && (<p style={{ color: 'red' }}>Alphabetical characters only</p>)}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Country</label>
                  <select className="form-control" {...register('country', { required: true })}>
                    {
                      Countries.map(c =>
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      )
                    }
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>City</label>
                  <input
                    {
                      ...register('city', { required: true })
                    }
                    type="text" className="form-control"/>
                  {errors?.city?.type === 'required' &&
                  <p style={{ color: 'red' }}>This field is required</p>}
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  {
                    ...register('address', { required: true })
                  }
                  type="text" className="form-control"/>
                {errors?.address?.type === 'required' &&
                <p style={{ color: 'red' }}>This field is required</p>}
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary btn-block p-3" style={{ fontSize: 18 }}>Order</button>
              </div>
            </form>
          </div>
        </div>
      </aside>
      {finalizeOrderStore.isLoading &&
      <div
        style={{ position: 'fixed', marginTop: '-62.5vh', paddingLeft: '48.3vw' }}>
        <Loader/>
      </div>}
      {
        !finalizeOrderStore.isLoading && finalizeOrderStore.error &&
        <ErrorDisplay error={finalizeOrderStore.error}/>
      }
    </div>
  )
})