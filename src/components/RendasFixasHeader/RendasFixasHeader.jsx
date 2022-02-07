import "./RendasFixasHeader.css";
import lupa from "../../assets/main-content/lupa.svg";

function RendasFixasHeader({ setSearchText, setOrderType }) {
  return (
    <>
      <div className='rendas-fixas-header'>
        <h3>Minhas Rendas Fixas</h3>

        <div className='orderer-area'>
          <select
            name=''
            id='select'
            onChange={(e) => setOrderType(e.target.value)}
          >
            <option value='' selected disabled hidden>
              Ordenar por
            </option>
            <option value='Valor investido'>Valor investido</option>
            <option value='Saldo bruto'>Saldo bruto</option>
          </select>

          <div className='search-area'>
            <img src={lupa} alt='Ícone de lupa' id='icon-lupa' />
            <input
              type='search'
              name='search'
              id='search'
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className='header-divider'></div>
    </>
  );
}

export default RendasFixasHeader;
