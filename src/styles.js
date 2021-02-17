import styled from 'styled-components';


export const Row = styled.span `
  display: grid;
  grid-template-rows: 1fr;
`;

export const Columns = styled.span `
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

export const Boxes = styled.span `
  display: grid;
  grid-template-columns: 195px 195px 195px 195px 195px 195px;

  div{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 20px #0000000D;
    border-radius: 10px;
    opacity: 1;
    padding: 10px;
    margin: 5px;
    text-align: left;
    font-size:11px;
    font-family: sans-serif;
    letter-spacing: 0.45px;
    color: #4E5B61;
    opacity: 1;
  }

  h3{
    text-align: left;
    font: sans-serif;
    letter-spacing: 0px;
    color: #4C309B;
    opacity: 1;
    font-size:18px;
    margin:0px;
  }
  h4{
    text-align: left;
    font-family: sans-serif;
    letter-spacing: 0.45px;
    color: #4E5B61;
    opacity: 1;
    font-size:11px;
    margin:0px;
  }
  `;

export const Top = styled.header `
display:grid;
grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
background: white;
box-shadow:  5px 5px 13px #d3d3d3,
             -5px -5px 13px #ededed;
padding: 20px;
position: fixed;
width:100%;

img {
  width:200px;
  height:30px;
  padding: 10px;
}

h3{
  text-align: left;
  font-family: sans-serif;
  letter-spacing: 0px;
  color: gray;
  opacity: 1;
  font-size:18px;
  margin:0px;
}
h4{
  text-align: left;
  font-family: sans-serif;
  letter-spacing: 0.45px;
  color: #9e9e9e;
  opacity: 1;
  font-size:11px;
  margin:0px;
}

}
`;

export const Side = styled.aside `
display:grid;
margin-top:2px;
grid-template-rows:67px 67px 67px 67px 46px 46px 46px 46px 67px 67px 67px 67px ;
background: white;
box-shadow:  5px 5px 10px #cccccc,
            -5px -5px 10px #f4f4f4;   
width:227px;
margin:100px 15px 0 0;
height:100%;
border-bottom: 2px solid lightgrey;

div{
  
  border-bottom: 2px solid lightgrey;
  letter-spacing: 0px;
  color: #707B81;
  opacity: 1;
}

ul{
  
  border-bottom: 2px solid lightgrey;
  letter-spacing: 0px;
  color: #707B81;
  opacity: 1;
}

h1{
  text-align: left;
  padding:10px;
  font-size:16px;
  font-family:sans-serif;
  width:115px;
  letter-spacing: 0px;
  font-weight:bold;
  color:#707B81;
}

h5{
  font-family:sans-serif;
  margin-left:10px;
}
`;

export const ChartFormatter = styled.div `
  width:1090px;
  background: white;
  border: 1px solid #DAE0E3;
  opacity: 1;
  border-radius:20px;
  padding: 35px;
  margin-top:20px;
  margin-bottom:20px;
`;

export const IncomeFormatter = styled.div `
display: grid;

div{
  display: flex;
  
  top: 688px;
  left: 268px;
  width: 372px;
  height: 77px;
  padding: 5px;
  margin:10px;
  justify-content:space-around;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #DAE0E3;
  opacity: 1
}

span{
 padding:0px;
 width:130px;
 height:50px;
}

h5{
  margin:0;
  font-family: sans-serif;
  color:gray;
}
h4{
  margin:0;
  color:#cb85d4;
  font-family: sans-serif;
  font-weight:500;
  font-size:18px;
}

p{
  margin:0;
  font-size:11px;
  font-family: sans-serif;
  font-weight:bold;
  color:grey;

}
`;

export const PositionFormatter = styled.div `
display: grid;

div{
  display: flex;
  padding: 5px;
  top: 688px;
  left: 650px;
  width:500px;
  height: 77px;
  margin:10px;
  justify-content:space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #DAE0E3;
  opacity: 1
 
}

span{
 padding:2px;
 width:200px;
 height:50px;
 align-items: center;
}
h4{
  margin:0;
  color:#0ecf75;
  font-family: sans-serif;
  font-size:15px;
}

p{
  margin:0;
  margin-top:5px;
  font-size:10px;
  font-family: sans-serif;
  font-weight:bold;
  color:grey;

}
`;


export const DueFormatter = styled.div `
display: grid;

div{
  display: flex;
  padding: 5px;
  top: 924px;
  left: 1119px;
  width: 180px;
  height: 77px;
  margin:10px;
  justify-content:space-around;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #DAE0E3;
  opacity: 1
 
}

span{
  padding:2px;
  width:200px;
  height:50px;
  align-items: center;
 }
 h4{
   margin:0;
   color:#8947fc;
   font-family: sans-serif;
   font-size:15px;
 }
 
 p{
   margin:0;
   margin-top:5px;
   font-size:10px;
   font-family: sans-serif;
   font-weight:bold;
   color:grey;
 
 }
`;

export const Attributes = styled.span `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
 
  top: 604px;
  left: 248px;
  width: 1160px;
  height: 721px;
  padding-top:20px;
  margin-top: 20px;
  border-radius:20px;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000000A;
  border-radius: 20px;
  opacity: 1

`;

export const Flex = styled.div `
  display: flex;
`;

export const SelectFormatter = styled.div `
  display:flex;
  padding:20px 20px 10px 20px;
  justify-content:space-between;
  align-items: center;
  height:40px;
  border-bottom: 1px solid #EEF2F4;

  h1{
    font-size:22px;
    color:#627179;
    font-family: sans-serif;

  }
`;







