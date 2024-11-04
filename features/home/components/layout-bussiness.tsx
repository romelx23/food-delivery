"use client"
import React, { FC, useEffect } from 'react'
import { useBusinessStore } from '../store/profile.store'
import { useBusinessInfo } from '../hooks/useBusinessInfo'

interface LayoutBussinessProps {
    children: React.ReactNode
}

export const LayoutBussiness: FC<LayoutBussinessProps> = ({ children }) => {

    // const { data, isLoading, error } = useBusinessInfo();

    // console.log({ data, isLoading, error });

    // const {
    //     setBusinesses
    // } = useBusinessStore()

    // useEffect(() => {
    //     if (data) {
    //         setBusinesses(data)
    //     }
    // }, [isLoading])

    return (
        <div className=''>
            {children}
        </div>
    )
}
