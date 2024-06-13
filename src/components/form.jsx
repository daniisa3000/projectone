import React from 'react'

const Form = () => {
  return (
    <div className='container'>
      <form className='form-group'>
        <input placeholder='Name' className='form-control mb-3' type="text" />
        <input placeholder='Age' className='form-control mb-3' type="text" />
        <input className='btn btn-info btn-block mb-3' type="submit" />
      </form>
    </div>
  )
}

export default Form
