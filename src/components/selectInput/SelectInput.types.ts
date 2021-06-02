export interface SelectInputProps {
  options: Array<{ label: string; value: string }>;
  onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
  value?: string | number;
}
