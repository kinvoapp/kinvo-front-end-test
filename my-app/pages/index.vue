<template>
  <div class="flex flex-col">
    <HeaderComponent>
      <template #nav>
        <div class="flex flex-row ml-auto">
          <span class="flex items-end bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="clarity:coin-bag-line" size="1.7em"
                class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
              <span>
                <p class="text-xs text-gray-500">{{ $t('bruct_salary') }}</p>
                <p class="text-base font-bold text-gray-500">R${{ snapshotByPortfolio.equity }}</p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="ph:arrow-up-bold" size="1.7em" class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
              <span>
                <p class="text-xs text-gray-500">{{ $t('value_applied') }}</p>
                <p class="text-base font-bold text-gray-500">R${{ snapshotByPortfolio.equity }}</p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="ph:chart-line-up-bold" size="1.7em"
                class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
              <span>
                <p class="text-xs text-gray-500">{{ $t('rentability') }}</p>
                <p class="text-base font-bold text-gray-500">{{ snapshotByPortfolio.percentageProfit }} %</p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="carbon:chevron-down" size="2em"
                class="p-1 bg-indigo-700 text-white mt-2 mr-2 m-2 rounded-full" />
              <span class="mt-2">
                <p class="text-xs text-gray-500 uppercase">{{ $t('wallet') }}</p>
                <p class="text-xs text-gray-500">{{ $t('my_wallet') }}</p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="carbon:menu" size="2em" class="p-2 bg-indigo-700 text-white mt-2 mr-2 m-2 rounded-full" />
            </div>
          </span>
        </div>
      </template>
    </HeaderComponent>
    <div class="grid grid-cols-6">
      <AsideComponent class="col-span-1" />
      <div class="col-span-5 px-8 bg-gray-100 overflow-y-scroll">
        <h2 class="text-indigo-700 text-2xl font-bold my-4">Renda Fixa</h2>
        <section id="stats" class="grid grid-cols-1 md:grid-cols-6 gap-4">
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">{{ $t('bruct_salary') }}</p>
              <p class="text-base font-bold text-indigo-900">R${{ snapshotByPortfolio.equity }}</p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">{{ $t('value_applied') }}</p>
              <p class="text-base font-bold text-indigo-900">R${{ snapshotByPortfolio.valueApplied }}</p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">{{ $t('result') }}</p>
              <p class="text-base font-bold text-indigo-900">R${{ snapshotByPortfolio.equityProfit }}</p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">{{ $t('rentability') }}</p>
              <p class="text-base font-bold text-indigo-900">{{ snapshotByPortfolio.percentageProfit }} %</p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">CDI</p>
              <p class="text-base font-bold text-indigo-900">{{ snapshotByPortfolio.indexerValue }} %</p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">{{ $t('about_cdi') }}</p>
              <p class="text-base font-bold text-indigo-900">{{ snapshotByPortfolio.percentageOverIndexer }}%</p>
            </div>
          </span>
        </section>

        <section id="titles">
          <div class="rounded-2xl shadow-md bg-white w-full h-[30vh] mt-8 p-6">
            {{ $t('title_rentability') }}
          </div>
          <div class="mx-auto w-3/5 overflow-hidden">
    <canvas
      data-te-chart="line"
      data-te-dataset-label="Traffic"
      data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
      data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
    </canvas>
  </div>
        </section>

        <section id="fixed_income">
          <div class="rounded-2xl shadow-md bg-white w-full mt-8 p-6">
            <span class="flex border-b pb-2">
              {{ $t('mine_fixed_income') }}
              <div class="ml-auto flex gap-x-4">
                <select :placeholder="$t('order_by')" class="border-gray-200 rounded-md">
                  <option value="">Sem ordem</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div class="ml-auto rounded-md border px-2">
                  <Icon name="mdi:magnify" size="1.5em" class="text-gray-400" />
                  <input type="text" class="border-0" />
                </div>
              </div>
            </span>
            <div>
              <div class="flex flex-col">
                <div v-for="product, ind in snapshotByProduct" :key='`product_${ind}`'
                  class="grid grid-cols-6 mt-4 gap-x-4">
                  <span class="col-span-2 border p-2 rounded">
                    <div>
                      <span class="uppercase mr-2">{{ $t('title') }}</span>
                      <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    </div>
                    <div class="p-3 grid grid-cols-2">
                      <p class="text-xs mt-4">{{ product.fixedIncome.name }}</p>
                      <span class="text-sm">
                        <p class="uppercase font-semibold text-gray-400">{{ $t('class') }}</p>
                        <p class="font-semibold text-indigo-500">{{ product.fixedIncome.bondType }}</p>
                      </span>
                    </div>
                  </span>
                  <span class="col-span-3 border p-2 rounded">
                    <span class="mb-4 uppercase mr-2">{{ $t('my_position') }}</span>
                    <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    <div class="grid grid-cols-6 p-4">
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_invested_amount') }}</p>
                        <p class="font-semibold text-base text-green-500 tracking-wide">{{ product.position.equity }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_bruct_salary') }}</p>
                        <p class="font-semibold text-base text-green-500">{{ product.position.equity }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_rentability') }}</p>
                        <p class="font-semibold text-base text-green-500">{{ product.position.equity }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_percentage_wallet') }}</p>
                        <p class="font-semibold text-base text-green-500">{{ product.position.equity }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">CDI</p>
                        <p class="font-semibold text-base text-green-500">{{ product.position.equity }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_about_cdi') }}</p>
                        <p class="font-semibold text-base text-green-500">{{ product.position.equity }}</p>
                      </span>
                    </div>
                  </span>
                  <span class="col-span-1 border p-2 rounded">
                    <span class="mb-4 uppercase mr-2">{{ $t('my_position') }}</span>
                    <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    <div class="grid grid-cols-6 p-4">
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_invested_amount') }}</p>
                        <p class="font-semibold text-base text-green-500 tracking-wide">{{ product.due.date }}</p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">{{ $t('short_bruct_salary') }}</p>
                        <p class="font-semibold text-base text-green-500">{{ product.due.daysUntilExpiration }}</p>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '~/store/app'
import {
  Chart,
  initTE,
} from "tw-elements";

initTE({ Chart });
const app = useAppStore()
const dailyEquityByPortfolioChartData = ref([])
const snapshotByPortfolio = ref({
  equity: 0,
  equityProfit: 0,
  indexerValue: 0,
  percentageOverIndexer: 0,
  percentageProfit: 0,
  valueApplied: 0,
})
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0,
  totalPage: 0,
})

const snapshotByProduct = ref([{
  due: {
    date: 'Carregando...',
    daysUntilExpiration: 0,
  },
  fixedIncome: {
    bondType: 'Carregando...',
    name: 'Carregando...',
    portfolioProductId: 0,
  },
  position: {
    equity: 0,
    indexerLabel: 'Carregando...',
    indexerValue: 0,
    percentageOverIndexer: 0,
    portfolioPercentage: 0,
    profitability: 0,
    valueApplied: 0,
  }
}])
const data = ref({})

// TODO: Refactor this to a list of objects
// const stats = ref([
//   { label: 'equity', value: 0 },
//   { label: 'valueApplied', value: 0 },
//   { label: 'equityProfit', value: 0 },
//   { label: 'percentageProfit', value: 0 },
//   { label: 'indexerValue', value: 0 },
//   { label: 'percentageOverIndexer', value: 0 }
// ])
const formatMask = (template) => {
  if (template === 'int') {
    const str = '132.521.230,01';
    const regex = /^\d{1,3}(\.\d{3})*,\d{2}$/;
    const isMatch = regex.test(str);
    console.log(isMatch); // true
  }
}

onMounted(() => {
  useFetch()
    .then((res) => {
      data.value = res
      console.log('snapshotByProduct', res.data.data.snapshotByPortfolio)
      snapshotByPortfolio.value = res.data.data.snapshotByPortfolio
      dailyEquityByPortfolioChartData.value = res.data.data.dailyEquityByPortfolioChartData.map(i => ({
        ...i.data,
      }))
      snapshotByProduct.value = res.data.data.snapshotByProduct.map(i => ({
        due: {
          date: i.due.date,
          daysUntilExpiration: i.due.daysUntilExpiration,
        },
        fixedIncome: {
          ...i.fixedIncome,
          portfolioProductId: i.portfolioProductId,
          name: i.fixedIncome.name,
          bondType: i.fixedIncome.bondType
        },
        position: {
          ...i.position,
          equity: i.position.equity,
          indexerLabel: i.position.indexerLabel,
          indexerValue: i.position.indexerValue,
          percentageOverIndexer: i.position.percentageOverIndexer,
          portfolioPercentage: i.position.portfolioPercentage,
          profitability: i.position.profitability,
          valueApplied: i.position.valueApplied,
        }
      }))

      // app.setNotification({
      //   show: true,
      //   type: 'success',
      //   message: 'Dados carregados com sucesso',
      // })
    })
    .catch((err) => {
      // app.setNotification({
      //   show: true,
      //   type: 'error',
      //   message: err.message,
      // })
    })
})
</script>