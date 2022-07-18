
interface SelectItemsProps {
  value: number
  label: string
}

export const orderByOptions: SelectItemsProps[] = [
  { value: 1, label: 'ordenar por' },
  { value: 2, label: 'valor investido (maior 1°)' },
  { value: 3, label: 'valor investido (menor 1°)' },
]
