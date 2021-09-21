import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { optionsValue } from '../../Const';
import axios from 'axios';
import CardLeaderboard from './CardLeaderboard';

const Container = styled.div`
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
`;

const Title = styled.span`
font-size:16px;
font-weight:900;
`;

const Select = styled.select``;

export default function CardHeader({title, handleOnChage}) { 
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Select onChange={ handleOnChage }>
                    {optionsValue.map((option, key) => 
                        <option value={option.value} key={option.id}>{option.label}</option>
                        )}
                </Select>
            </Header>
        </Container>
    )
}
