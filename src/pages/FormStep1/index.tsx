import { useNavigate} from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import React, { ChangeEvent } from 'react';



export const FormStep1 = () =>{

    const {state, dispatch} = useForm()
    const Navigate = useNavigate()

    React.useEffect(()=>{
        dispatch({type: FormActions.setCurrentStep,
        payload: 1})

    },[])


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({type:FormActions.setName,
        payload: e.target.value})
    }

    const handleNextStep = () =>{
        if(state.name !== '') Navigate('/step2');
        else alert('Preencha os dados.')

        
       
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label htmlFor="name">Seu nome completo</label>
                <input 
                value={state.name}
                type="text" name='name'
                id='name'
                autoFocus
                onChange={e => handleNameChange(e)}
                />                

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}