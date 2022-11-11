import React from 'react'
import { ParentComponent, LogoContainer, Image, Form, Input, ButtonContainer, Button} from './style'
import Logo from "../../assets/pablos.svg";

/*
                <Input
                    value={inputValues.nombre} 
                    onChange={(e) => setInputValues({... inputValues, nombre: e.target.value})} 
                    placeholder='nombre' 
                    colorFuente="red"
                />
                <Input
                    value={inputValues.apellido}  
                    onChange={(e) => setInputValues({... inputValues, apellido: e.target.value})} 
                    placeholder='apellido' 
                    colorFuente="blue"
                />
                <Input
                    value={inputValues.email}  
                    onChange={(e) => setInputValues({... inputValues, email: e.target.value})} 
                    placeholder='email' 
                    colorFuente="green"
                />
                <Input 
                    value={inputValues.password} 
                    onChange={(e) => setInputValues({... inputValues, password: e.target.value})} 
                    placeholder='contraseña' 
                    type="password" 
                    colorFuente="purple"
                />
*/


const Container = ({inputValues, setInputValues, handleSubmit, handleVaciarForm}) => {

    const arrInputValues = Object.keys(inputValues);

  return (
    <div>
        <ParentComponent>
            <LogoContainer>
                <Image src={Logo} alt="form_logo"/>
            </LogoContainer>
            <span>Registrate</span>
            <Form id="form_camada" onSubmit={handleSubmit}>
                {
                    arrInputValues.map((tipoInupt) => (
                    <Input
                        value={inputValues[tipoInupt]}
                        onChange={(e) => setInputValues({... inputValues, [tipoInupt]: e.target.value})}
                        placeholder={tipoInupt}
                    />
                    ))
                }
                
            </Form>
            <ButtonContainer>
                <Button onClick={handleVaciarForm} type='button'>Cancelar</Button>
                <Button form="form_camada" principal={true} type="submit">Enviar</Button>
            </ButtonContainer>
        </ParentComponent>
    </div>
  )
}

export default Container