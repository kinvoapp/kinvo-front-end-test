import "./RendasFixas.css";
import React from "react";
import RendasFixasHeader from "../RendasFixasHeader/RendasFixasHeader";
import RendasFixasCard from "../RendasFixasCard/RendasFixasCard";

function RendasFixas({ minhasRendasFixas, setSearchText }) {
  const listaDeContainers = minhasRendasFixas.map((data, index) => {
    return <RendasFixasCard data={data} key={`rendas-card-${index}`} />;
  });
  // if (minhasRendasFixas) {
  // }

  return (
    <div class='rendas-fixas'>
      <RendasFixasHeader setSearchText={setSearchText} />

      {listaDeContainers ? <ul>{listaDeContainers}</ul> : ""}

      {/* //TODO? Paginação */}
    </div>
  );
}

export default RendasFixas;
