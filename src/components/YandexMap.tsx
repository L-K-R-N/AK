
import { YMaps, Map, Placemark, TypeSelector } from '@pbe/react-yandex-maps';
import { styled } from 'styled-components';
import { DivStyled } from './Styled/DivStyled';

interface Props {
    center: number[]
}
const YMapsStyled = styled(YMaps)`
    width: 100%;
    height: 100%;
`
const MapStyled = styled(Map)`
    width: 100%;
    height: 100%;
`
export const YandexMap: React.FC<Props> = ({center}) => (
  <YMapsStyled>
    <DivStyled>
      <MapStyled defaultState={{ center: center, zoom: 5 }}>
        <Placemark defaultGeometry={center} />
        <TypeSelector />
      </MapStyled>
    </DivStyled>
  </YMapsStyled>
);