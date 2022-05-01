import React from 'react';
import Container from './styles';

type BulletProps = {
  thumbnail: string;
  title: string;
  value: number;
};

function HeaderBullet(props: BulletProps) {
  const { thumbnail, title, value } = props;
  return (
    <Container>
      <img src={thumbnail} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </Container>
  );
}

export default HeaderBullet;
