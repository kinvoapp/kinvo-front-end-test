import { Stack, Typography } from '@mui/material'
import { Navigation } from 'swiper'
import { InfoBox } from './components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useApiDataStore } from '../../../../store/apiData'
import { useIsMobile } from '../../../../hooks/useIsMobile'

export const FixedIncome: React.FC = () => {
  const isMobile = useIsMobile()
  const { storeState: { currentData } } = useApiDataStore()

  if (!currentData) {
    return <div>loading</div>
  }

  return (
    <Stack mt={3}>
      <Typography variant='h3' color='primary.main'>Renda Fixa</Typography>
      <Stack spacing={2} mt={3}>
        <Swiper
          grabCursor
          autoHeight
          autoplay
          spaceBetween={20}
          modules={[Navigation]}
          slidesPerView={isMobile ? 1.2 : 6}
          onSwiper={(swiper) => swiper.animating = true}
          style={{
            padding: 10,
            width: '100%',
            height: '100px',
            display: 'flex',
            alignItems: 'stretch',
            transition: 'ease-in-out'
          }}
        >
          <SwiperSlide>
            <InfoBox label='SALDO BRUTO' value={currentData.snapshotByPortfolio.equity} />
          </SwiperSlide>
          <SwiperSlide>
            <InfoBox label='VALOR APLICADO' value={currentData.snapshotByPortfolio.valueApplied} />
          </SwiperSlide>
          <SwiperSlide>
            <InfoBox label='RESULTADO' value={currentData.snapshotByPortfolio.equityProfit} />
          </SwiperSlide>
          <SwiperSlide>
            <InfoBox
              isPercentageValue
              label='RENTABILIDADE'
              value={currentData.snapshotByPortfolio.percentageProfit}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InfoBox
              label='CDI'
              isPercentageValue
              value={currentData.snapshotByPortfolio.indexerValue}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InfoBox
              isPercentageValue
              label='% SOBRE CDI'
              value={currentData.snapshotByPortfolio.percentageOverIndexer}
            />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Stack>
  )
}
