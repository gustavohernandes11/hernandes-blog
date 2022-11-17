import { ArrowLeft } from '@styled-icons/feather'
import { IconButton } from '../../IconButton'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './styles'

export const GoBackButton = ({ className }: any) => {
    const router = useRouter()
    return (
        <S.Container >
            <IconButton onClick={() => router.back()} className={className}>
                <ArrowLeft size={20} />
            </IconButton>
        </S.Container>

    )
}
