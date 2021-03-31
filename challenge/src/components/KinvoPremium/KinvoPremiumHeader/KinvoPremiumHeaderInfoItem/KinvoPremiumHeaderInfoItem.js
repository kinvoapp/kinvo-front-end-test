import * as S from 'components/styled/lib';
import DynamicSvg from 'components/DynamicSvg/DynamicSvg';

const KinvoPremiumHeaderInfoItem = ({ name, title, text }) => {
  return (
    <S.KinvoPremiumHeaderInfoItem>
      <DynamicSvg name={name} />
      <div>
        <S.Title as="h4" size="8" color="neutral-light" transform="uppercase" letterSpacing="0.4">
          {title}
        </S.Title>
        <S.Text size="16" weight="bold" color="neutral-light">
          {text}
        </S.Text>
      </div>
    </S.KinvoPremiumHeaderInfoItem>
  );
};

export default KinvoPremiumHeaderInfoItem;
