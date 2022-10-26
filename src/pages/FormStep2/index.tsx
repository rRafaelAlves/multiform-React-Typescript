import { useNavigate} from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import React, { ChangeEvent } from 'react';
import { SelectOption } from '../../components/SelectOption';



export const FormStep2 = () =>{

    const {state, dispatch} = useForm()
    const Navigate = useNavigate()

    React.useEffect(()=>{

        if(state.name === '') Navigate('/');       
        else{
            dispatch({type: FormActions.setCurrentStep,
                payload: 2});
        };
    },[]);

    const handleChangeStep = (event: string) =>{
        if(event === 'next'){
            if(state.name !== '') Navigate('/step3');
        else alert('Preencha os dados.')
        }else{
            if(state.name !== '') Navigate('/')
        } 
    }
    
    return(
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption 
                title="Sou iniciante"
                description="Comecei a programar a 2 anos"
                icon="🥳"
                selected={state.level === 0}
                option={0}
                />

                <SelectOption 
                title="Sou programador"
                description="Já programo a 2 anos ou mais"
                icon="😎"
                selected={state.level === 1}
                option={1}
                />
                              

                <button className='backButton' onClick={()=>handleChangeStep('back')}>Voltar</button>
                <button onClick={()=>handleChangeStep('next')}>Próximo</button>
            </C.Container>
        </Theme>
    )
}