import React, {useState} from 'react'
import Container from './Container'

const FormComponent = () => {

  const [inputValues, setInputValues] = useState({nombre: "", apellido: "",email: "", password: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    e.target.reset();
  }

  const handleVaciarForm = () => {
    setInputValues({nombre: "", apellido: "",email: "", password: ""});
  }

  const childProps = {
    inputValues,
    setInputValues,
    handleSubmit,
    handleVaciarForm
  }

  return (
    <div>
        <Container {...childProps} />
    </div>
  )
}

export default FormComponent