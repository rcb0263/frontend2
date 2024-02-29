import { FunctionComponent } from "preact";



type CityProps = {
 name: string;
 latitude: string;
 longitude: string;
 country: string;
 population: string;
 is_capital: string;

};

const City: FunctionComponent<CityProps> = (props) => {
  const { name, latitude, longitude, country, population , is_capital} = props;
  return (
    <div  class={"contenedorcity"}>
      <li>name: {name}</li>
      <li>latitude: {latitude}</li>
      <li>longitude: {longitude}</li>
      <li>country: {country}</li>
      <li>population: {population}</li>
      <li>is_capital: {is_capital}</li>
    </div>
  );
};

export default City;