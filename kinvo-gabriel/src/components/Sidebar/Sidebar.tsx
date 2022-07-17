import { Stack } from '@mui/material'
import { SidebarMenuItem, SidebarItem } from './components'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone'

export interface SidebarMenuItemProps {
  label: string,
  icon: JSX.Element
  currentSelected?: boolean
}

export interface SidebarItemProps {
  label: string
  currentSelected?: boolean
}

export const Sidebar: React.FC = () => {

  const MENU_ITEMS_1: SidebarMenuItemProps[] = [
    {
      icon: <AutoModeOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Resumo da Carteira',
    },
    {
      icon: <PieChartOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Meus Produtos',
    },
    {
      icon: <MonetizationOnOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Meus Proventos',
    },
    {
      icon: <ExtensionOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Classe de Ativos',
      currentSelected: true
    },
  ]

  const ASSET_CLASS: SidebarItemProps[] = [
    { label: 'Ação' },
    { label: 'Fundo' },
    { label: 'Fundo Imobiliário' },
    { label: 'Fundo Renda Fixa', currentSelected: true },
  ]

  const MENU_ITEMS_2: SidebarMenuItemProps[] = [
    {
      icon: <DiamondOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Rentabilidade Real',
    },
    {
      icon: <InsertChartOutlinedTwoToneIcon sx={{ color: '#FFF' }} />,
      label: 'Projeção da Carteira',
    },
    {
      icon: <DonutLargeOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Risco x Retorno',
    },
    {
      icon: <LockOutlinedIcon sx={{ color: '#FFF' }} />,
      label: 'Cobertura do FGC',
    },
  ]

  return (
    <Stack>
      {MENU_ITEMS_1.map(menuItem => <SidebarMenuItem menuItem={menuItem} />)}
      {ASSET_CLASS.map(item => <SidebarItem item={item} />)}
      {MENU_ITEMS_2.map(menuItem => <SidebarMenuItem menuItem={menuItem} />)}
    </Stack>
  )
}
