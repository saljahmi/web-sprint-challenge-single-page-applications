import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Pizza</h2>

        {/* <div className='errors'> */}
          
          
          {/* <div>{errors.sauce}</div> */}
        {/* </div>
      </div> */}

      <div className='form-group inputs'>
        <h4>Build Your Own Pizza</h4>

        <label>Name Your Pizza&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>
        <div id="name_error">{errors.name}</div>

        <label>Size
          <select
            onChange={onInputChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
        <div id="size_error">{errors.size}</div>
    </div>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* <h4>Select your sauce</h4>
        
        <label>
          <input
            type="radio"
            name='civil'
            value='single'
            checked={values.civil === 'single'}
            onChange={onInputChange}
          />
        </label>

        <label>Married
          <input
            type="radio"
            name="civil"
            value='married'
            checked={values.civil === 'married'}
            onChange={onInputChange}
          />
        </label> */}

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        <label>Pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Onions
          <input
            type="checkbox"
            name="onions"
            checked={values.toppings.onions}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />
        </label>
      </div>

        <label>Special Instructions
          <input
            value={values.special}
            onChange={onInputChange}
            name='special'
            type='text'
          />
        </label>

      <button id="submit" disabled={disabled}>Add to Order</button>

      </div>
    </form>
  )
}