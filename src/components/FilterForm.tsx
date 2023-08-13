import React, { useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import {  useAppDispatch, useAppSelector } from "../hooks/redux"
import { citiesOptions, countriesOptions, districtsOptions } from "../forms/selects/options/AddressOptions"
import makeAnimated from 'react-select/animated'
import { changeOpenedFilters, setOnlyLiked } from "../store/reducers/FilterSlice"
import { SelectController } from "./SelectController"
import { IAddress } from '../models/IForm'


export interface FilterForm {
    address: IAddress;
    liked: boolean;
}


export const FilterForm: React.FC = () => {
    const { onlyLiked} = useAppSelector(state => state.filterReducer)
    const dispatch = useAppDispatch()
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


    const submit: SubmitHandler<FilterForm> = data => {

        console.log(data.liked)
        // if (data.address.country) {
        //     dispatch(setAddressCountry(data.address.country))
            
        // }
        // if (data.address.city) {
        //     dispatch(setAddressCity(data.address.city))
        // }
        // if (data.address.district) {
           
        //     dispatch(setAddressDistrict(data.address.district))
            
        // }
        // if (data.address.street) {
        //     dispatch(setAddressStreet(data.address.street))
        // }
        // console.log(address.country, )
    }

    const error: SubmitErrorHandler<FilterForm> = data => {
        console.log(data)
        
    }

    
    return(
        <form onSubmit={handleSubmit(submit, error)}>
            <input type="checkbox" {...register('liked')} checked={onlyLiked} onChange={() => dispatch(setOnlyLiked(onlyLiked ? false : true))}/>
            {/* <input type="text" {...register('address.street')} aria-invalid={errors.address?.street ? true : false}/> */}

                {/* <div>
                    <label htmlFor="country">Выберите страну</label>
                    <SelectController
                        control={control}
                        name="address.country"
                        required={false}
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
                        required={false}
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
                    required={false}
                    selectProps={{
                        placeholder: 'Выберете район',
                        options: districtsOptions,
                        isMulti: true
                    }}
                />
                <Controller
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
                    )}/> 

                </div>
            
                 <div>
                    <label htmlFor="district">Выберите район</label>
                    <input type="text" {...register('address.district')} />

                </div>
                <div>
                    <label htmlFor="street">Выберите улицу</label>
                    <input type="text" {...register('address.street')} aria-invalid={errors.address?.street ? true : false}/>
                </div>*/}
                    <button>Найти</button>
                    <button onClick={() => reset()} type="button">Очистить форму</button> 
                </form>
    )
}

export default FilterForm