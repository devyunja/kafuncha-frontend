import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
`;

const ErrorMsg = styled.span`
    color : ${props => props.color};
`;

export default function Error({errorMsg, color}){
    return (
        <Container>
            <ErrorMsg color={color}>{errorMsg}</ErrorMsg>
        </Container>
    )
}

Error.prototype = {
    errorMsg : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
}