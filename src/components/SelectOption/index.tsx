import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';

type Props ={
    title : string
    description: string
    icon: string
    selected: boolean
    option: number
}



export const SelectOption = ({title, description, icon, selected, option}: Props) =>{
    const {state, dispatch} = useForm()
    const handleChangeLevel = () =>{
        dispatch({
            type: FormActions.setLevel,
            payload: option
        })
    }

    return(
        <C.Container selected={selected} onClick={handleChangeLevel}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>
                    {title}
                </C.Title>
                <C.Description>
                    {description}
                </C.Description>

            </C.Info>

        </C.Container>
    )
}