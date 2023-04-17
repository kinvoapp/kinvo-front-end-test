<template>
  <div class="flex flex-col">
    <HeaderComponent>
      <template #nav>
        <div class="flex flex-row ml-auto">
          <span class="">
            <Icon name="line-md:account-alert" />
            <span>
              <small>Account</small>
              <p>100000</p>
            </span>
          </span>
          <span class="">
            <Icon name="clarity:coin-bag-line" />
            <span>
              <small>Account</small>
              <p>100000</p>
            </span>
          </span>
        </div>
      </template>
    </HeaderComponent>
    <div class="grid grid-cols-6">
      <AsideComponent>
        <template #content>
          <div>
            <p>dailyEquityByPortfolioChartData: {{ data }}</p>
          </div>
        </template>
      </AsideComponent>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '~/store/app'

const app = useAppStore()
const dailyEquityByPortfolioChartData = ref([])
const snapshotByPortfolio = ref([])
const snapshotByProduct = ref([])


const data = ref({})
onMounted(() => {
  useFetch()
    .then((res) => {
      data.value = res
      dailyEquityByPortfolioChartData.value = res.data.dailyEquityByPortfolioChartData.map(i => ({
        ...i.data,
      }))
      snapshotByPortfolio.value = res.data.snapshotByPortfolio.map(i => ({
        ...i.data,
      }))
      snapshotByProduct.value = res.data.snapshotByProduct.map(i => ({
        ...i.data,
      }))
    })
    .catch((err) => {
      app.setNotification({
        show: true,
        type: 'error',
        message: err.message,
      })
    })
})
</script>