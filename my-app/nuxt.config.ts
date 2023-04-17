export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  runtimeConfig: {
    // The private keys which are only available server-side
    // Its only an example, not hardcode values here, consider use Envs
    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.API_BASE
    }
  },
  googleFonts: {
    download: true,
    families: {
      Poppins: [400, 500, 600, 700]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config'
  },
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    vueI18n: {
      legacy: false,
      locale: 'pt',
      messages: {
        pt: {
          fixed_income: 'Renda Fixa',
          bruct_salary: 'Salário Bruto',
          value_applied: 'Valor Aplicado',
          result: 'Resultado',
          rentability: 'Rentabilidade',
          invested_amount: 'Valor Investido',
          class: 'Classe',
          about_cdi: 'Sobre o CDI',
          title_rentability: 'Rentabilidade dos Títulos',
          mine_fixed_income: 'Minhas Rendas Fixas',
          title: 'Título',
          order_by: 'Ordenar por',
          mounth: 'Mês',
          wallet: 'Carteira',
          my_wallet: 'Minha Carteira',
          wallet_resume: 'Resumo da Carteira',
          my_products: 'Meus Produtos',
          my_provents: 'Meus Proventos',
          my_position: 'Minha Posição',
          active_classes: 'Classes de Ativos',
          action: 'Ação',
          fund: 'Fundo',
          reits: 'Fundo Imobiliário',
          fund_fixed_income: 'Fundo de Renda Fixa',
          fixed_income_funds: 'Fundo de Renda Fixa',
          real_rentability: 'Rentabilidade Real',
          carrer_projection: 'Projeção de Carreira',
          return_risk: 'Retorno x Risco',
          FGC_protection: 'Cobertura do FGC',
          wallets_by_types: 'Divisão de Carteira por Tipos',
          wallets_by_title: 'Divisão de Carteira por Títulos',
          type: 'Tipo',
          due_date: 'Vencimento',
          title_tooltip: 'Titulos que você possui',
          position_tooltip: 'Posição atual de seus investimentos',
          due_date_tooltip: 'Data de vencimento do titulo',
          short_invested_amount: 'Valor Inves.',
          short_bruct_salary: 'Saldo Bruto',
          short_rentability: 'Rent.',
          short_percentage_wallet: '% Cart.',
          short_about_cdi: 'Sobre CDI',
          short_due_date: 'Data Venc.',
          short_days_until_due_date: 'Dias até Venc.',
          search: 'Escreva e aperte ENTER',
          settings: 'Configurações'
        },
        en: {
          fixed_income: 'Fixed Income',
          bruct_salary: 'Bruct Salary',
          value_applied: 'Value Applied',
          result: 'Result',
          rentability: 'Rentability',
          invested_amount: 'Invested Amount',
          class: 'Class',
          about_cdi: 'About CDI',
          title_rentability: 'Title Rentability',
          mine_fixed_income: 'My Fixed Income',
          title: 'Title',
          order_by: 'Order by',
          mounth: 'Mounth',
          wallet: 'Wallet',
          my_wallet: 'My Wallet',
          wallet_resume: 'Wallet Resume',
          my_products: 'My Products',
          my_provents: 'My Provents',
          my_position: 'My Position',
          active_classes: 'Active Classes',
          action: 'Action',
          fund: 'Fund',
          reits: 'REITs',
          fund_fixed_income: 'Fixed Income Fund',
          fixed_income_funds: 'Fixed Income Fund',
          real_rentability: 'Real Rentability',
          carrer_projection: 'Carrer Projection',
          return_risk: 'Return x Risk',
          FGC_protection: 'FGC Protection',
          wallets_by_types: 'Wallets by Types',
          wallets_by_title: 'Wallets by Title',
          type: 'Type',
          due_date: 'Due Date',
          title_tooltip: 'Titles that you have',
          position_tooltip: 'Current position of your investments',
          due_date_tooltip: 'Due date of the title',
          short_invested_amount: 'Inv. Amount',
          short_bruct_salary: 'Bruct Salary',
          short_rentability: 'Rent.',
          short_percentage_wallet: '% Wallet',
          short_about_cdi: 'About CDI',
          short_due_date: 'Due Date',
          short_days_until_due_date: 'Days until Due Date',
          search: 'Write and press ENTER',
          settings: 'Settings'
        },
        es: {
          fixed_income: 'Renta Fija',
          bruct_salary: 'Salario Bruto',
          value_applied: 'Valor Aplicado',
          result: 'Resultado',
          rentability: 'Rentabilidad',
          invested_amount: 'Valor Invertido',
          class: 'Clase',
          about_cdi: 'Sobre el CDI',
          title_rentability: 'Rentabilidad de los Títulos',
          mine_fixed_income: 'Mis Rendimientos Fijos',
          title: 'Título',
          order_by: 'Ordenar por',
          mounth: 'Mes',
          wallet: 'Cartera',
          my_wallet: 'Mi Cartera',
          wallet_resume: 'Resumen de Cartera',
          my_products: 'Mis Productos',
          my_provents: 'Mis Proventos',
          my_position: 'Mi Posición',
          active_classes: 'Clases de Activos',
          action: 'Acción',
          fund: 'Fondo',
          reits: 'Fondo Inmobiliario',
          fund_fixed_income: 'Fondo de Renta Fija',
          fixed_income_funds: 'Fondo de Renta Fija',
          real_rentability: 'Rentabilidad Real',
          carrer_projection: 'Proyección de Carrera',
          return_risk: 'Retorno x Riesgo',
          FGC_protection: 'Cobertura del FGC',
          wallets_by_types: 'División de Cartera por Tipos',
          wallets_by_title: 'División de Cartera por Títulos',
          type: 'Tipo',
          due_date: 'Vencimiento',
          title_tooltip: 'Títulos que usted tiene',
          position_tooltip: 'Posición actual de sus inversiones',
          due_date_tooltip: 'Fecha de vencimiento del título',
          short_invested_amount: 'Valor Inves.',
          short_bruct_salary: 'Saldo Bruto',
          short_rentability: 'Rent.',
          short_percentage_wallet: '% Cart.',
          short_about_cdi: 'Sobre CDI',
          short_due_date: 'Fecha Venc.',
          short_days_until_due_date: 'Días hasta Venc.',
          search: 'Escriba y presione ENTER',
          settings: 'Configuración'
        }
      }
    }
  }
})
