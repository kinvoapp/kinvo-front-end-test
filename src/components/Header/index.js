import './Header.css';
import { Link } from 'react-router-dom';
import {
  faDollarSign,
  faChevronCircleDown,
  faBars,
  faArrowCircleUp,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { strings } from '../../utils';

export default function Header() {
  return (
    <header>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="22"
          viewBox="0 0 100 32.51"
        >
          <defs>
            <linearGradient
              id="a"
              x1="1.047"
              y1="-0.436"
              x2="-0.268"
              y2="1.444"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#4C309B" />
              <stop offset="1" stop-color="#9e51ba" />
            </linearGradient>
          </defs>
          <g transform="translate(-28 -32)">
            <path
              d="M23.664.09a3.08,3.08,0,1,0,2.649,2.649A3.05,3.05,0,0,0,23.664.09Zm-.4,7.274h0a3.028,3.028,0,0,0-3.053,3.053V29.457A3.057,3.057,0,0,0,23.26,32.51h0a3.028,3.028,0,0,0,3.053-3.053V10.418A3.028,3.028,0,0,0,23.26,7.364ZM10.328,19.892,17.423,12.8a3.349,3.349,0,0,0,.359-4.67,3.308,3.308,0,0,0-4.67.359l-7,7V3.053A3.028,3.028,0,0,0,3.053,0,3.028,3.028,0,0,0,0,3.053v26.4A3.028,3.028,0,0,0,3.053,32.51h0a3.028,3.028,0,0,0,3.053-3.053V24.338l7.095,7a3.349,3.349,0,0,0,4.67.359h0a3.308,3.308,0,0,0-.359-4.67ZM87.472,7.364A12.528,12.528,0,1,0,100,19.892,12.533,12.533,0,0,0,87.472,7.364Zm0,19.129a6.6,6.6,0,1,1,6.6-6.6A6.612,6.612,0,0,1,87.472,26.493ZM40.144,7.948h0A12.037,12.037,0,0,0,34.216,9.52,3.045,3.045,0,0,0,31.3,7.364h0a3.028,3.028,0,0,0-3.053,3.053V29.457A3.057,3.057,0,0,0,31.3,32.51h0a3.028,3.028,0,0,0,3.053-3.053V19.668a5.807,5.807,0,0,1,5.793-5.793h0a5.778,5.778,0,0,1,5.793,5.793v9.789A3.057,3.057,0,0,0,48.99,32.51h0a3.028,3.028,0,0,0,3.053-3.053V19.8A11.825,11.825,0,0,0,40.144,7.948Zm34.172-.269h0a2.982,2.982,0,0,0-4,1.347l-6.691,13.7-6.78-13.74a2.982,2.982,0,0,0-4-1.347l-.09.045a2.982,2.982,0,0,0-1.347,4l9.475,19.084a2.94,2.94,0,0,0,2.694,1.661h.135a2.989,2.989,0,0,0,2.694-1.661l9.25-19.084A3,3,0,0,0,74.315,7.678Z"
              transform="translate(28 32)"
              fill="url(#a)"
            />
          </g>
        </svg>
        <a className="logo">premium</a>
      </div>

      <div className="header_items">
        <div className="header_item">
          <FontAwesomeIcon icon={faDollarSign} />
          <div className="header_item_title_and_value">
            <p className="header_item_title">
              {strings('pt-BR', 'headerGrossBalanceItemTitle')}
            </p>
            <p className="header_item_value">{'123.123.123,00'}</p>
          </div>
        </div>

        <div className="header_item">
          <FontAwesomeIcon icon={faArrowCircleUp} />
          <div className="header_item_title_and_value">
            <p className="header_item_title">
              {strings('pt-BR', 'headerAppliedValueItemTitle')}
            </p>
            <p className="header_item_value">{'123.123.123,00'}</p>
          </div>
        </div>

        <div className="header_item">
          <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
          <div className="header_item_title_and_value">
            <p className="header_item_title">
              {strings('pt-BR', 'headerProfitabilityItemTitle')}
            </p>
            <p className="header_item_value">{'123.123.123,00'}</p>
          </div>
        </div>

        <div>
          <div className="header-wallet">
            <FontAwesomeIcon icon={faChevronCircleDown} color="#4c309b" />
            <div className="header_item_title_and_value">
              <p className="wallet">{strings('pt-BR', 'wallet')}</p>
              <p className="my-wallet">{strings('pt-BR', 'my-wallet')}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="header-wallet">
            <FontAwesomeIcon icon={faBars} color="#FFFF" className="menu" />
            <div className="header_item_title_and_value"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
