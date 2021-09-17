import styled from 'styled-components';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content: center;
align-items: center;
`;

const Contents = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width:70%;
height:50%;
`;

const TextContents = styled.div`
width:50%;
`;

const MainText = styled.div`
    font-size:36px;
    font-weight: 900;
    letter-spacing: 2px;
    line-height:50px;
    margin-bottom:100px;
`;

const SubText = styled.div`
    color:#dcdde1;
    margin-bottom:30px;
`;

const UploadBtn = styled.button`
    all:unset;
    background-color: #276DC1;
    color:white;
    padding: 8px 18px;
    border-radius: 20px;
    cursor: pointer;
`;

const ImgContents = styled.div``;

const UploadImg = styled.div`
    font-size:250px;
`;

export default function Upload() {
    return (
        <Container>
            <Contents>
                <TextContents>
                    <MainText>Kafunch로 편리하게 잠수 관리 하세요!</MainText>
                    <SubText>데이터 조회를 위해 PC 카카오톡에서 내려받은  파일을 업로드 해주세요.
                        횟수 랭킹, 잠수 인원 등을 확인 하실 수 있습니다!
                    </SubText>
                    <UploadBtn type='button'>파일 업로드</UploadBtn>
                </TextContents>
                <ImgContents>
                    <UploadImg>💣</UploadImg>
                </ImgContents>
            </Contents>
        </Container>
    )   
}

// UI만 완료