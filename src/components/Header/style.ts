import styled from "styled-components";


export const Content = styled.div`
  #page-room {
    display: flex;
    padding: 22px;

    border-bottom: 1px solid var(--grey-200);
    font-family: "Montserrat", sans-serif;
    
    .content {
      display: flex;
      align-items: center;

      margin-left: 240px;
      max-width: 1420px;
    
    ul{
      display: flex;
      
      color:var(--grey-800);
      list-style: none;

      li{
        display: flex;

        >img{
          margin-left:10px;
          padding:8px;
        }

      }
    }
}
    >button{
      display: none;
    }
    .menu-box{
    display: inline-block;
    flex-wrap: wrap;

    border: 0px;
    height: 50px;
    margin: 0 auto;
    text-align: left;

    cursor:pointer;
    }
  }

  @media screen and (max-width:1024px){
    img{
      max-width:125px;
    }
    .content{

      gap: 10px;
      margin-left: 20px;
      max-width: 20px;
    }
  }
`