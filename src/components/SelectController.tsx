import { Control, Controller, ValidationRule } from "react-hook-form"
import ReactSelect, { MultiValue } from 'react-select'
import { IOption } from "../models/IForm";
import { Error } from "./UI/Error";
import FilterForm from "./FilterForm";


interface Props {
    control: Control<FilterForm | any, any>;
    name: string;
    required: string | ValidationRule<boolean> | undefined;
    selectProps: ISelectProps;
}

interface ISelectProps {
    animatedComponent?: any;
    placeholder: string;
    isMulti: boolean;
    options: IOption[];
    
}

export const SelectController: React.FC<Props> = ({control, name, required, selectProps}) => {
    
    const onChangeFunc = (val: MultiValue<IOption>) => {
        return val.map(c => c.value)
     }

    const handleSetValue = (options: IOption[], value: string | string[]) => {
        return options.filter(c => value?.includes(c.value))
    }

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required
            }}
            render={({field: {value, onChange}, fieldState: {error}}) => (
                <div>
                    <ReactSelect 
                        // components={selectProps.animatedComponent}
                        placeholder={selectProps.placeholder}
                        isMulti
                        isSearchable={true}
                        options={selectProps.options}
                        value={handleSetValue(selectProps.options, value)}
                        onChange={val => onChange(val.map(c => c.value))}
                    />
                    {error && <Error errorMessage={error.message} />}
                </div>
            )}/>

    )
}