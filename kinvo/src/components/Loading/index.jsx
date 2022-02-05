import { LoadingContainer } from './style'

import LoadingGif from '../../assets/images/loading.gif'

function Loading() {
    return(
        <LoadingContainer>
            <img src={LoadingGif} alt="" />
            <h2>Carregando...</h2>
        </LoadingContainer>
    )
}

export default Loading