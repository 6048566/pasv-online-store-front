import React from 'react'

const BreadCrumbsTop = () => {
  return (
    <>
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Category products</h2>
          <nav>
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Best category</a></li>
              <li className="breadcrumb-item active" aria-current="page">Great articles</li>
            </ol>
          </nav>
        </div>
      </section>
    </>
  )
}

export default BreadCrumbsTop
