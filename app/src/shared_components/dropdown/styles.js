import styled from 'styled-components'

export const CONTAINER = styled.div`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-primary);

    h5 {
        font-weight: var(--font-weight-medium);
        font-size: 16px;
        color: var(--color-dark);
        margin: 10px;
    }

    img {
        max-height: 13px;
    }

    .dropdown_container{
        position: relative;
        max-height: 50px;
    }
   

    .dropdown_title {
        display: flex;
        max-height: 50px;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        max-width: 100%;
        border: 1.5px solid var(--color-secondary);
        border-radius: var(--border-radius-large);
        padding: 0 12px;
        height: 32px;
    }
    

    .dropdown_item_container {
        position: absolute;
        margin-top: 16px;
        border: 1.5px solid var(--color-secondary);
        border-radius: var(--border-radius-medium);
        background: white;
        max-height: 250px;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        transition: 0.5s;
        overflow-y: auto;
        visibility: show;
    }

    .dropdown_item_container_closed{
        position: absolute;
        margin-top: 16px;
        visibility: hidden;
        border: 1.5px solid var(--color-secondary);
        border-radius: var(--border-radius-medium);
        background: white;
        max-height: 0px;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        transition: 0.3s;
        overflow: hidden;
    }

    input  {
        font-weight: var(--font-weight-small);
        font-size: 14px;
        color: var(--color-dark);
        width: calc(100% - 54px);
        outline: none;
        cursor: pointer;
        background: none;
        border: none;
    }

    input::placeholder {
        color: var(--color-primary);
    }

    .dropdown_item {
        min-height: 50px;
        display: flex;
        align-items: center;
        padding-left: 18px;
        font-size: 18px;
        color: gray;
        cursor: pointer;
    }
    
    .dropdown_item:hover {
        filter: brightness(90%);
        transition: 0.3s;
    }

`