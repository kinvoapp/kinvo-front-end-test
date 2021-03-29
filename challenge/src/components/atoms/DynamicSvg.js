import PropTypes from 'prop-types';
import colorsPool from '../../helpers/colorsPool';
import svgPool from '../../helpers/svgPool';
import { SvgWrapper } from '../styled/lib';

/**
 * @param {String} color - Cor do SVG
 * @param {String} name - Nome do SVG
 */

const DynamicSvg = ({ color, name }) => {
  const DynamicComponent = svgPool[name] || svgPool['ativos'];

  return (
    <SvgWrapper color={color}>
      <DynamicComponent />
    </SvgWrapper>
  );
};

DynamicSvg.propTypes = {
  color: PropTypes.oneOf(colorsPool),
  name: PropTypes.oneOf(Object.keys(svgPool)),
};

DynamicSvg.defaultProps = {
  color: 'violet',
  name: 'ativos',
};

export default DynamicSvg;
