import React from "react";

type BulletProps = {
  thumbnail: string;
  title: string;
  value: number;
};

function HeaderBullet(props: BulletProps) {
  const { thumbnail, title, value } = props;
  return (
    <div>
      <img src={thumbnail} alt="" />
      <h3> {title} </h3>
      <p>{value}</p>
    </div>
  );
}

export default HeaderBullet;
