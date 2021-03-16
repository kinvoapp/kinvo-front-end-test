import {
  BlockContainer,
  VerticalLine,
  BlockTextContainer,
  BlockTitle,
  BlockValue,
} from './style';

export default function Block(props: { title: string; value: string }) {
  const { title, value } = props;
  return (
    <BlockContainer>
      <VerticalLine />
      <BlockTextContainer>
        <BlockTitle>{title}</BlockTitle>
        <BlockValue>{value}</BlockValue>
      </BlockTextContainer>
    </BlockContainer>
  );
}
