<template>
  <div class="flex flex-col">
    <HeaderComponent>
      <template #nav>
        <div class="flex flex-row ml-auto">
          <span class="flex items-end bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon
                name="clarity:coin-bag-line"
                size="1.7em"
                class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full"
              />
              <span>
                <p class="text-xs text-gray-500">
                  {{ $t('bruct_salary') }}
                </p>
                <p class="text-base font-bold text-gray-500">
                  R${{ snapshotByPortfolio.equity }}
                </p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon name="ph:arrow-up-bold" size="1.7em" class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
              <span>
                <p class="text-xs text-gray-500">
                  {{ $t('value_applied') }}
                </p>
                <p class="text-base font-bold text-gray-500">
                  R${{ snapshotByPortfolio.equity }}
                </p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon
                name="ph:chart-line-up-bold"
                size="1.7em"
                class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full"
              />
              <span>
                <p class="text-xs text-gray-500">
                  {{ $t('rentability') }}
                </p>
                <p class="text-base font-bold text-gray-500">
                  {{ snapshotByPortfolio.percentageProfit }} %
                </p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <div class="py-2 pl-2 flex flex-row ">
              <Icon
                name="carbon:chevron-down"
                size="2em"
                class="p-1 bg-[#5d41ac] text-white mt-2 mr-2 m-2 rounded-full"
              />
              <span class="mt-2">
                <p class="text-xs text-gray-500 uppercase">
                  {{ $t('wallet') }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ $t('my_wallet') }}
                </p>
              </span>
            </div>
          </span>
          <span class="flex items-end justify-between bg-white p-2">
            <button class="py-2 pl-2 flex flex-row " @click.prevent="viewOptions = !viewOptions">
              <Icon name="carbon:menu" size="2em" class="p-2 bg-[#5d41ac] text-white mt-2 mr-2 m-2 rounded-full" />
            </button>
            <transition name="fade">
              <div v-if="viewOptions" class="fixed bg-white shadow-lg top-10 right-10 rounded border p-2" @mouseleave="viewOptions = !viewOptions">
                <ul class="flex flex-col">
                  <li class="flex flex-row items-center hover:bg-slate-100">
                    <Icon name="carbon:settings" size="1.5em" class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
                    <span class="text-sm">
                      {{ $t('settings') }}
                    </span>
                  </li>
                  <li class="flex flex-row items-center hover:bg-slate-100">
                    <Icon name="carbon:logout" size="1.5em" class="p-1 bg-gray-200 text-white mt-2 mr-2 m-2 rounded-full" />
                    <span class="text-sm">
                      {{ $t('logout') }}
                    </span>
                  </li>
                </ul>
              </div>
            </transition>
          </span>
        </div>
      </template>
    </HeaderComponent>
    <div class="grid grid-cols-6">
      <AsideComponent class="col-span-1" />
      <div class="col-span-5 px-8 bg-gray-100 overflow-y-scroll">
        <h2 class="text-[#5d41ac] text-2xl font-bold my-4">
          Renda Fixa
        </h2>
        <section id="stats" class="grid grid-cols-1 md:grid-cols-6 gap-4">
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                {{ $t('bruct_salary') }}
              </p>
              <p class="text-base font-bold text-indigo-900">
                R${{ formatMask('int', snapshotByPortfolio.equity) }}
              </p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                {{ $t('value_applied') }}
              </p>
              <p class="text-base font-bold text-indigo-900">
                R${{ formatMask('int', snapshotByPortfolio.valueApplied) }}
              </p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                {{ $t('result') }}
              </p>
              <p class="text-base font-bold text-indigo-900">
                R${{ formatMask('int', snapshotByPortfolio.equityProfit) }}
              </p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                {{ $t('rentability') }}
              </p>
              <p class="text-base font-bold text-indigo-900">
                {{ snapshotByPortfolio.percentageProfit }} %
              </p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                CDI
              </p>
              <p class="text-base font-bold text-indigo-900">
                {{ snapshotByPortfolio.indexerValue }} %
              </p>
            </div>
          </span>
          <span class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-2">
            <div class="border-l-2 pl-2">
              <p class="text-sm text-gray-500">
                {{ $t('about_cdi') }}
              </p>
              <p class="text-base font-bold text-indigo-900">
                {{ snapshotByPortfolio.percentageOverIndexer }}%
              </p>
            </div>
          </span>
        </section>

        <section id="titles">
          <div class="rounded-2xl shadow-md bg-white w-full mt-8 p-6">
            {{ $t('title_rentability') }}
            <iframe
              class="w-full"
              height="450"
              src="https://lookerstudio.google.com/embed/reporting/2669d026-d4f7-4b5a-b706-bd1395773243/page/Jl6MD"
              frameborder="0"
              style="border:0"
            ></iframe>
          </div>
        </section>

        <section id="fixed_income">
          <div class="rounded-2xl shadow-md bg-white w-full mt-8 p-6">
            <span class="flex border-b pb-2">
              <span class="text-[#5d41ac]">
                {{ $t('mine_fixed_income') }}
              </span>
              <div class="ml-auto flex gap-x-4">
                <select v-model="filter" :placeholder="$t('order_by')" class="border-gray-200 rounded-md">
                  <option value="">
                    Sem ordem
                  </option>
                  <option value="date-asc">
                    + {{ $t('short_due_date') }}
                  </option>
                  <option value="date-desc">
                    - {{ $t('short_due_date') }}
                  </option>
                </select>
                <div class="ml-auto rounded-md border px-2">
                  <Icon name="mdi:magnify" size="1.5em" class="text-gray-400" />
                  <input
                    v-model="query"
                    type="text"
                    :placeholder="$t('search')"
                    class="border-0"
                    @keydown.enter="handleUpdate('query', query)"
                  >
                </div>
              </div>
            </span>
            <div>
              <div class="flex flex-col">
                <div
                  v-for="product, ind in paginationArr[currentPage]"
                  :key="`product_${ind}`"
                  class="grid grid-cols-12 mt-4 gap-x-4"
                >
                  <span class="col-span-3 border p-2 rounded">
                    <div class="p-1">
                      <span class="uppercase mr-2">
                        {{ $t('title') }}
                      </span>
                      <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    </div>
                    <div class="p-3 grid grid-cols-2">
                      <p class="text-xs mt-4">
                        {{ product.fixedIncome.name }}
                      </p>
                      <span class="ml-12 text-sm">
                        <p class="uppercase font-semibold text-gray-400">
                          {{ $t('class') }}
                        </p>
                        <p class="font-semibold text-indigo-500">
                          {{ product.fixedIncome.bondType }}
                        </p>
                      </span>
                    </div>
                  </span>
                  <span class="col-span-6 border p-2 rounded">
                    <span class="mb-4 uppercase mr-2">
                      {{ $t('my_position') }}
                    </span>
                    <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    <div class="grid grid-cols-6 p-4">
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_invested_amount') }}
                        </p>
                        <p class="font-semibold text-base text-green-500 tracking-wide">
                          {{ formatMask('int', product.position.equity) }}
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_bruct_salary') }}
                        </p>
                        <p class="font-semibold text-base text-green-500">
                          {{ formatMask('int', product.position.equity) }}
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_rentability') }}
                        </p>
                        <p class="font-semibold text-base text-green-500">
                          {{ formatMask('int', product.position.equity) }} %
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_percentage_wallet') }}
                        </p>
                        <p class="font-semibold text-base text-green-500">
                          {{ formatMask('int', product.position.equity) }} %
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          CDI
                        </p>
                        <p class="font-semibold text-base text-green-500">
                          {{ formatMask('int', product.position.equity) }}
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_about_cdi') }}
                        </p>
                        <p class="font-semibold text-base text-green-500">
                          {{ formatMask('int', product.position.equity) }}
                        </p>
                      </span>
                    </div>
                  </span>
                  <span class="col-span-3 border p-2 rounded">
                    <span class="mb-4 uppercase mr-2">
                      {{ $t('my_position') }}
                    </span>
                    <Icon name="tabler:info-circle" size="1.5em" class="text-gray-400" />
                    <div class="grid grid-cols-2 p-4">
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_due_date') }}
                        </p>
                        <p class="font-semibold text-base text-sky-500 tracking-wide">
                          {{ product.due.date }}
                        </p>
                      </span>
                      <span class="flex flex-col text-sm">
                        <p class="text-sm uppercase tracking-wide">
                          {{ $t('short_days_until_due_date') }}
                        </p>
                        <p class="font-semibold text-base text-sky-500">
                          {{ product.due.daysUntilExpiration }}
                        </p>
                      </span>
                    </div>
                  </span>
                </div>
                <div class="flex justify-center mt-4">
                  <div>
                    <button v-if="currentPage >= 1" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l" @click="handleUpdate('prev')">
                      <Icon name="mdi:chevron-left" size="1.5em" class="text-gray-400" />
                    </button>
                    <button
                      v-for="item, ind in paginationArr"
                      :key="`pag_${ind}`"
                      class="bg-gray-200 rounded mx-1 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4"
                    >
                      {{ ind + 1 }}
                    </button>
                    <button v-if="currentPage + 1 !== paginationArr.length" class="bg-gray-200 rounded ml-4 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l" @click="handleUpdate('next')">
                      <Icon name="mdi:chevron-right" size="1.5em" class="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="graphs">
          <div class="grid grid-cols-2 gap-4 m-8">
            <div class="rounded-2xl shadow-md text-lg bg-white w-full mt-8 p-6 border-gray-200">
              {{ $t('wallets_by_types') }}
              <iframe
                width="600"
                height="600"
                src="https://lookerstudio.google.com/embed/reporting/4578bf43-21f9-4b6e-ba7b-eafb8923d4cb/page/pp6MD"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="rounded-2xl shadow-md text-lg bg-white w-full mt-8 p-6 ">
              {{ $t('wallets_by_title') }}
              <iframe
                width="600"
                height="600"
                src="https://lookerstudio.google.com/embed/reporting/4578bf43-21f9-4b6e-ba7b-eafb8923d4cb/page/pp6MD"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const { formatMask } = useFormatMask()
const app = useAppStore()
const query = ref('')
const filter = ref('')
const viewOptions = ref(false)
const dailyEquityByPortfolioChartData = ref([])
const currentPage = ref(0)
const paginationArr = ref([{} as any])
const snapshotByPortfolio = ref({
  equity: 0,
  equityProfit: 0,
  indexerValue: 0,
  percentageOverIndexer: 0,
  percentageProfit: 0,
  valueApplied: 0
})

const snapshotByProduct = ref([{
  due: {
    date: 'Carregando...',
    daysUntilExpiration: 0
  },
  fixedIncome: {
    bondType: 'Carregando...',
    name: 'Carregando...',
    portfolioProductId: 0
  },
  position: {
    equity: 0,
    indexerLabel: 'Carregando...',
    indexerValue: 0,
    percentageOverIndexer: 0,
    portfolioPercentage: 0,
    profitability: 0,
    valueApplied: 0
  }
}])

const filteredItems = computed(() =>
  query.value === ''
    ? []
    : snapshotByProduct.value.filter((item) => {
      return item.fixedIncome.name.toLowerCase().includes(query.value.toLowerCase())
    })
)

const handleUpdate = (action, value?) => {
  if (action === 'query') {
    snapshotByProduct.value = snapshotByProduct.value.filter((item) => {
      return item.fixedIncome.name.toLowerCase().includes(value.toLowerCase())
    })
  }
  if (value === '') {
    fetchData()
  }
  if (action === 'next') {
    currentPage.value = currentPage.value + 1
  }
  if (action === 'prev') {
    currentPage.value = currentPage.value - 1
  }
}

const fetchData = () => {
  snapshotByProduct.value = []
  useFetch()
    .then((res: any) => {
      snapshotByPortfolio.value = res.data.data.snapshotByPortfolio
      dailyEquityByPortfolioChartData.value = res.data.data.dailyEquityByPortfolioChartData.map(i => ({
        ...i.data
      }))
      snapshotByProduct.value = res.data.data.snapshotByProduct.map(i => ({
        due: {
          date: i.due.date,
          daysUntilExpiration: i.due.daysUntilExpiration
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
          valueApplied: i.position.valueApplied
        }
      }))

      app.setNotification({
        show: true,
        type: 'success',
        message: 'Dados carregados com sucesso'
      })
    })
    .catch((err) => {
      app.setNotification({
        show: true,
        type: 'error',
        message: err.message
      })
    })
}
watchEffect(() => {
  if (snapshotByProduct.value.length >= 5) {
    paginationArr.value = []
    for (let i = 0; i < snapshotByProduct.value.length; i += 5) {
      paginationArr.value.push(snapshotByProduct.value.slice(i, i + 5))
    }
  }
})

watchEffect(() => {
  if (filteredItems.value.length !== 0) {
    paginationArr.value = []
    for (let i = 0; i < filteredItems.value.length; i += 5) {
      paginationArr.value.push(filteredItems.value.slice(i, i + 5))
    }
  }
})
onMounted(() => {
  fetchData()
})
</script>
