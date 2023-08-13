import Select from "react-select";
import { styled } from "styled-components";
import { IOption } from "../../models/IForm";

export const CustomSelect = styled(Select).attrs({
    styles: ({
        control: (baseStyles) => ({
            ...baseStyles,
            background: 'var(--second-bg-color)',
        }),
        option: (provided, state) => ({

        }),
    })
})

interface Props {
    optns: IOption[];
}

export const Sorting: React.FC<Props> = ({...props}) => {

    return (
        <div></div>
    )
}