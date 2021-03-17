import styled from 'styled-components';

export const Card = styled.div`
  margin: 18px 0;
  background: var(--background-card);
  border-radius: 10px;
  padding: ${props => props.small ? '10px 0' : '18px 0'};;

  display: ${props => props.small ? 'flex' : ''};
  flex-direction: ${props => props.small ? 'row' : ''};
  min-width: 170px;
  
`;

export const BorderIn =  styled.div`
  margin: 0 10px;
  height: 38px;
  width: 2px;
  background: var(--border-in);

  
`;

export const ResultContainer =styled.div`
  /* margin-left: 10px; */
`;

export const CardHeader = styled.header`
  /* padding: 18px; */
  border-bottom: 1px solid var(--border-card);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h3`
  padding: 2px 18px 18px 18px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-title);

`;

export const Label = styled.p`
  font-size: 9px;
  font-weight: 700;
  line-height: 18px;
  color: var(--text-label-header);
  text-transform: uppercase;
`;

export const Result = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: var(--primary-color);
`;

export const DetailedRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--border-card);
  &:nth-child(2n){
    background: var(--selected-item);
  }
`;

export const DetailedCard = styled.div`
  position: relative;

  &:nth-child(1) {
    width:380px;
  }

  &:nth-child(2){
    width: 440px;
  }
`;

export const DetailedCardHeader = styled.div`
  width: 140px;
  padding: 8px;
  padding-bottom: 6px;
  border: 1px solid var(--border-in);
  border-bottom: white;
  border-radius: 10px 10px 0 0;
  
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;

`;

export const DetailedCardBody = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  /* width: 370px; */
  padding: 8px;
  border: 1px solid var(--border-in);
  border-radius: 0 10px 10px 10px;
  position: relative; 

  &::before{
    content: '';
    height: 1px;
    width: 138px;
    position: absolute;
    top: -1px;
    left: 0;
    background: var(--border-card);
  }
`;

export const TitleName = styled.p`
  color: var(--text-label-header);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  max-width: 240px;
  /* color: ${props => props.green ? 'var(--color-green)' : props.blue ? 'var(--color-blue)' : 'var(--primary-color)' }; */
`;


export const Data = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.green ? 'var(--color-green)' : props.blue ? 'var(--color-blue)' : 'var(--primary-color)' };
`;

export const InputGroups = styled.div`
  padding: 2px 18px 18px 18px;
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const InputContainer = styled.div`
  color: var(--text-items);
  padding: 4px;
  border: 1px solid var(--border-in);
  border-radius: 10px;
  min-width: 154px;
  
  align-items: center;
  display: flex;
  flex-direction: row;
  
`;

export const Input = styled.input`
  outline: none;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--text-items);
  width: 240px;

  &::placeholder{
    color: var(--text-label-header);
    font-weight: 400;
  }
`;

export const Select = styled.select`
  outline: none;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--text-items);
  width: 170px;
`;

export const CardPieChart= styled.div`
  width: 520px;
  padding: 18px 0;
  background: var(--background-card);
  border-radius: 10px;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;