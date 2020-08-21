import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Pizza from './Pizza';
import Home from './Home';
import Form from './Form';
import formSchema from './formSchema';


const initialFormValues = {
  name: '',
  size: '',
  // sauce: '',
  toppings: {
    pepperoni: false,
    pineapple: false,
    onions: false,
    sausage: false,
  },
  special: '',
}


const initialFormErrors = {
  name: '',
  // size: '',
  // sauce: '',
}

const initialPizzas = []
const initialDisabled = true

export default function App() {
  const [pizzas, setPizzas] = useState(initialPizzas)       
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)       

  const getPizzas = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res)
        // setPizzas(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data])
        // console.log( res.data)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      // sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping]),
      special: formValues.special.trim(),
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>

      <div>
        <h1> Your favorite food delivered while coding </h1>
        <Link to = '/Form'>Pizza?</Link>
      </div>

      <Switch>
        <Route path='/Form'>
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Home/>
        </Route>
      </Switch>

      {/* {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      } */}
    </div>
  )
}





