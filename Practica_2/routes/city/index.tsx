import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import City from "../../components/City.tsx";


type CityData = {
    name: string;
    latitude: string;
    longitude: string;
    country: string;
    population: string;
    is_capital: string;
  };
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, {city: CityData|undefined, search: string}>) => {
    const url = new URL(_req.url);
    const city = url.searchParams.get("search") || undefined;
    const API_KEY = "enCOwLncPOpvCrjA32IIHA==KSpRAxqODmQGOZV3";
    if (!API_KEY) {
      return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
    }
    const urlapi = "https://api.api-ninjas.com/v1/city?name=" + city ;
    try {
        if (city=== undefined){
            return ctx.render({
                city: undefined,
                search: " "
              });
        }
      const response = await axios.get<CityData[]>(urlapi, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.data === null) {
        return new Response("user not found", { status: 404 });
      }
      return ctx.render({
        city: {
            ...response.data[0],
            is_capital: response.data[0] ? "Es capital" : "No es capital"
            
        },
        search: city
      });
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<{city: CityData|undefined, search: string}>) => {
  const data = props.data;
  const search = props.data.search

  return (
    <div>
      
        <form class={"boton"} method="get" target="/city">
          <input  class={"search"} value = {search} type="text" name="search"/>
          <button class={"buton"}>Buscar</button>
        </form>
        <div>
            
        </div>
        {data.city !== undefined &&
        <City name={data.city.name} latitude={data.city.latitude} longitude={data.city.longitude}  country={data.city.country} population={data.city.population} is_capital={data.city.is_capital} />
        }
    </div>
  );
};

export default Page;