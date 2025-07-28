"use client"

import {ChakraProvider, type ChakraProviderProps, defaultSystem} from "@chakra-ui/react"

export function Provider(props: Omit<ChakraProviderProps, 'value'>) {
    return (
        <ChakraProvider {...props} value={defaultSystem}/>
    )
}
