import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { IAddress, IOption } from "../models/IForm"
import ReactSelect, { ActionMeta, MultiValue, OnChangeValue } from 'react-select'
import { citiesOptions, countriesOptions, districtsOptions } from "../forms/selects/options/AddressOptions"
import Select from "react-select/dist/declarations/src/Select"
import makeAnimated from 'react-select/animated'
import { useState } from "react"
import { changeAddressCity, changeAddressCountry, changeAddressDistrict, changeAddressStreet } from "../store/reducers/FilterSlice"
import { Error } from "./UI/Error"
import { SelectController } from "./SelectController"
import { WrapperStyled } from "./Styled/WrapperStyled"
import { Div, DivStyled } from "./Styled/DivStyled"
import { mainColor } from "../styles/colors"
import theme from "styled-theming"



export interface FilterForm {
    address: IAddress
}


export const Filter: React.FC = () => {
    const {address, openedFilters} = useAppSelector(state => state.filterReducer)
    const {
        register, 
        handleSubmit, 
        formState: { 
            errors 
        },
        reset,
        control
    } = useForm<FilterForm>({

    })
    let animatedComponent = makeAnimated()


    const submit: SubmitHandler<FilterForm> = data => {
        changeAddressCountry(data.address.country)
        changeAddressCity(data.address.city)
        changeAddressDistrict(data.address.district)
        changeAddressStreet(data.address.street)
    }

    const error: SubmitErrorHandler<FilterForm> = data => {
        console.log(data)
    }

    return (
        <DivStyled bakcground={'var(--text-color)'} position="fixed" width="100vw" height="100vh">
            <WrapperStyled style={{display: openedFilters ? 'block' : 'none'}}>
            <form onSubmit={handleSubmit(submit, error)}>
            <div>
                <label htmlFor="country">Выберите страну</label>
                <SelectController
                    control={control}
                    name="address.country"
                    required={true}
                    selectProps={{
                        placeholder: 'Выберите страну',
                        options: countriesOptions,
                        isMulti: true
                    }}
                />
            </div>
            <div>
                 <label htmlFor="city">Выберите город</label>
                 <SelectController
                    control={control}
                    name="address.city"
                    required={true}
                    selectProps={{
                        placeholder: 'Выберите город',
                        options: citiesOptions,
                        isMulti: true
                    }}
                />
                
            </div>
                <div>
                <label htmlFor="district">Выберите район</label>
                <SelectController
                    control={control}
                    name="address.district"
                    required={true}
                    selectProps={{
                        placeholder: 'Выберете район',
                        options: districtsOptions,
                        isMulti: true
                    }}
                />
                {/* <Controller
                    control={control}
                    name="address.district"
                    rules={{
                        required: 'Выберите город'
                    }}
                    render={({field: {value, onChange}, fieldState: {error}}) => (
                        <div>
                            <ReactSelect
                                components={animatedComponent}
                                placeholder="District"
                                isMulti
                                isSearchable={true}
                                options={districtsOptions}
                                value={handleSetValue(districtsOptions, value)}
                                onChange={val => onChange(val.map(c => c.value))}
                            />
                            {error && <Error errorMessage={error.message} />}
                        </div>
                    )}/> */}

                </div>
            
            {/* <div>
                <label htmlFor="district">Выберите район</label>
                <input type="text" {...register('address.district')} />

            </div>
            <div>
                <label htmlFor="street">Выберите улицу</label>
                <input type="text" {...register('address.street')} aria-invalid={errors.address?.street ? true : false}/>
            </div> */}
                <button>Найти</button>
                <button onClick={() => reset()} type="button">Очистить форму</button>
            </form>
        </WrapperStyled>
        </DivStyled>
    )
}