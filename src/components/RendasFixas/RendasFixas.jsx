import "./RendasFixas.css";
import React from "react";
import RendasFixasHeader from "../RendasFixasHeader/RendasFixasHeader";
import RendasFixasCard from "../RendasFixasCard/RendasFixasCard";

function RendasFixas({ minhasRendasFixas, setSearchText, setOrderType }) {
  const listaDeContainers = minhasRendasFixas.map((data, index) => {
    return <RendasFixasCard data={data} key={`rendas-card-${index}`} />;
  });

  return (
    <div class='rendas-fixas'>
      <RendasFixasHeader
        setSearchText={setSearchText}
        setOrderType={setOrderType}
      />

      {listaDeContainers ? <ul>{listaDeContainers}</ul> : <></>}
    </div>
  );
}

export default RendasFixas;
