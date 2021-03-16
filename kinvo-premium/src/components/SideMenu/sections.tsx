import { useState } from 'react';
import {
  SectionContainer,
  Icon,
  Title,
  IconBack,
  InnerSectionLeftContainer,
} from './style';

const ArrowBackSrc = '/images/arrowBack.svg';
const PointSrc = '/images/point.svg';

export default function SectionButton(props: {
  title: string;
  iconSrc: string;
  disabled: boolean;
  openedOptions?: Array<string>;
}) {
  const { title, iconSrc, disabled, openedOptions } = props;
  const [openSection, setOpenSection] = useState(false);

  return (
    <>
      <SectionContainer
        color={openSection ? 'var(--gray-active)' : 'var(--white)'}
        disabled={disabled}
        onClick={() => setOpenSection(!openSection)}
      >
        <InnerSectionLeftContainer>
          <Icon src={iconSrc} />
          <Title>{title}</Title>
        </InnerSectionLeftContainer>
        <IconBack src={ArrowBackSrc} />
      </SectionContainer>
      {openSection &&
        openedOptions?.map((textButton: string) => (
          <SectionOpenedOptions
            text={textButton}
            onClick={() => {}}
          />
        ))}
    </>
  );
}

const SectionOpenedOptions = (props: { onClick: () => void; text: string }) => {
  const { onClick, text } = props;
  const [clickedSection, setClickedSection] = useState(false);

  return (
    <SectionContainer
      isInner={true}
      color={clickedSection ? 'var(--gray-active)' : 'var(--white)'}
      onClick={() => {
        setClickedSection(!clickedSection), onClick();
      }}
    >
      <InnerSectionLeftContainer>
        <Icon src={PointSrc} isInner={true} />
        <Title isInner={true}>{text}</Title>
      </InnerSectionLeftContainer>
      <IconBack src={ArrowBackSrc} />
    </SectionContainer>
  );
};
