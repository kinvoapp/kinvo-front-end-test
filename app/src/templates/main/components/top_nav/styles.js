import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    min-width: calc(100vw - 56px);
    min-height: 90px;
    padding: 0 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--color-light);
    box-shadow: var(--box-shadow-large);

    .valued_icon_container {
        display: flex;
        margin-right: 20px;
    }

    .valued_icon {
        display: flex;
        align-items: center;
        font-family: var(--font-family-primary);
        color: var(--color-primary);
        margin: 0 0 0 34px;
        .valued_icon_text {
            margin-left: 10px;
        }

        p {
            font-size: 8px;
            text-transform: uppercase;
        }
    }

    .small_outlined_icon {
        .outlined_icon {
            height: 30px;
            width: 30px;
        }
        .active_outlined_icon {
            height: 30px;
            width: 30px;
        }
    }

`