<template>
  <div class="flex h-screen flex-col justify-between border-r bg-white">
    <div class="px-4 py-6">
      <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
        <a v-for="item, ind in options" :key="`sidemenu_${ind}`" class="flex items-center cursor-pointer hover:bg-slate-200 gap-2 rounded-lg bg-gray-100/50 px-4 py-2 text-gray-700">
          <Icon :name="item.icon" />
          <span class="text-sm font-medium">{{ item.name }}</span>
        </a>
      </nav>
      <div class="">
        <slot name="content" />
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
      },
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