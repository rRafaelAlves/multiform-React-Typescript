import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import React, { ChangeEvent } from 'react';



export const FormStep3 = () => {

    const { state, dispatch } = useForm()
    const Navigate = useNavigate()

    React.useEffect(() => {
        if (state.name === '') Navigate('/');
        else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        };
    }, []);


    const handleContactChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {

        if (type === 'email') {
            dispatch({
                type: FormActions.setEmail,
                payload: e.target.value
            })
        } else {
            dispatch({
                type: FormActions.setGithub,
                payload: e.target.value
            })
        }

    }

    const handleChangeStep = (event: string) => {
        if (event === 'next') {
            if (state.email !== '' && state.github !== '') console.log(state);
            else alert('Preencha os dados.')
        } else {
            Navigate('/step2')
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os campos para conseguirmos entrar em contato.</p>

                <hr />

                <label htmlFor="email">Qual seu email?</label>
                <input
                    value={state.email}
                    type="text"
                    name='email'
                    id='email'
                    autoFocus
                    onChange={e => handleContactChange(e, 'email')}
                />

                <label htmlFor="github">Qual seu Github?</label>
                <input
                    value={state.github}
                    type="text"
                    name='github'
                    id='github'
                    autoFocus
                    onChange={e => handleContactChange(e, 'github')}
                />

                <button className='backButton' onClick={() => handleChangeStep('back')}>Voltar</button>
                <button onClick={() => handleChangeStep('next')}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}