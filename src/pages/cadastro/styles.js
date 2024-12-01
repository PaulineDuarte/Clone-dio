import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;

 `

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: px;
    line-height: 44px;
    letter-spacing:0em; 
    text-align: left; 



    color: #FFFFFF;
`

export const TitleCadastro = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 43.58px;
    margin-bottom: 8px;
    white-space: nowrap;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const SubtitleCriar = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    
    
`


export const JaTenhoConta  = styled.p`
   font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    text-align: left;
    float: left;
    margin-right: 10px;
    color:#FFFFFF;
    cursor: pointer;

span {
 color: #23DD7A;

}
` 