import React from 'react'

const index = ({spanText, pText}) => {
  return (
    <div className="d-flex review-email w-100 bg-success mb-5 py-3">
        <img src="/assets/check.png" alt="check.png" className="mx-2" />
        <div className="section-alert">
            <span className="text-light my-0"> {spanText} </span>
            <p className="text-light my-0"> {pText} </p>
        </div>
    </div>
  )
}

export default index