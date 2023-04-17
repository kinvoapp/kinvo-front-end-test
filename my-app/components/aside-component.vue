<template>
  <div class="flex h-screen flex-col justify-between bg-white">
    <div class="">
      <div class="flex h-screen flex-col justify-between bg-white">
        <div class="">
          <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1 cursor-pointer mx-2">
            <a class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
              <Icon name="carbon:3d-cursor" />
              <span class="text-sm font-medium">
                {{ $t('wallet_resume') }}
              </span>
            </a>

            <details class="group [&_summary::-webkit-details-marker]:hidden ">
              <summary class="flex cursor-pointer items-center  justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div class="flex items-center gap-2">
                  <Icon name="carbon:wallet" class="bg-gray-100 rounded-full" />
                  <span class="text-sm font-medium">
                    Resumo Da Carteira
                  </span>
                </div>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <Icon name="carbon:chevron-down" />
                </span>
              </summary>

              <nav aria-label="Teams Nav" class="flex flex-col px-4 bg-slate-100 rounded">
                <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-300 hover:text-gray-700">
                  <Icon name="carbon:dot-mark" />
                  <span class="text-sm font-medium cursor-pointer">
                    {{ $t('action') }}
                  </span>
                </a>
                <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                  <Icon name="carbon:dot-mark" />
                  <span class="text-sm font-medium cursor-pointer">
                    {{ $t('fund') }}
                  </span>
                </a>
                <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                  <Icon name="carbon:dot-mark" />
                  <span class="text-sm font-medium cursor-pointer">
                    {{ $t('reits') }}
                  </span>
                </a>
                <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                  <Icon name="carbon:dot-mark" />
                  <span class="text-sm font-medium cursor-pointer">
                    {{ $t('fund') }}
                  </span>
                </a>
              </nav>
            </details>

            <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Icon name="material-symbols:diamond-outline-rounded" class="bg-gray-100 rounded-full" />
              <span class="text-sm font-medium">
                {{ $t('real_rentability') }}
              </span>
            </a>

            <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Icon name="material-symbols:chart-data-outline-rounded" class="bg-gray-100 rounded-full" />

              <span class="text-sm font-medium">
                {{ $t('carrer_projection') }}
              </span>
            </a>

            <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Icon name="teenyicons:lifebuoy-outline" class="bg-gray-100 rounded-full" />

              <span class="text-sm font-medium">
                {{ $t('return_risk') }}
              </span>
            </a>
            <a class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Icon name="material-symbols:lock-outline" class="bg-gray-100 rounded-full" />

              <span class="text-sm font-medium">
                {{ $t('FGC_protection') }}
              </span>
            </a>
          </nav>
        </div>
      </div>

      <div class="">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = ref([
  {
    name: 'Resumo da carteira',
    icon: 'akar-icons:dashboard',
    selected: false
  },
  {
    name: 'Meus produtos',
    icon: 'clarity:coin-bag-line',
    selected: false
  },
  {
    name: 'Meus proventos',
    icon: 'majesticons:dollar-circle-line',
    selected: false
  },
  {
    name: 'Classes de Ativos',
    icon: 'fluent:puzzle-piece-16-regular',
    selected: false,
    children: [
      {
        name: 'Ações',
        icon: 'ph:dot-fill',
        selected: false
      },
      {
        name: 'Fundo',
        icon: 'ph:dot-fill',
        selected: false
      },
      {
        name: 'Fundo Imobiliário',
        icon: 'ph:dot-fill',
        selected: false
      },
      {
        name: 'Fundo Renda Fixa',
        icon: 'ph:dot-fill',
        selected: false
      }
    ]
  },
  {
    name: 'Rentabilidade Real',
    icon: 'clarity:line-chart-line',
    selected: false
  },
  {
    name: 'Projeção de Carreira',
    icon: 'clarity:line-chart-line',
    selected: false
  },
  {
    name: 'Risco x Retorno',
    icon: 'clarity:line-chart-line',
    selected: false
  },
  {
    name: 'Cobertura do FGC',
    icon: 'clarity:line-chart-line',
    selected: false
  }
])
</script>
