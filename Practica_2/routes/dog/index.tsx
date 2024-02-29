import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Dog from "../../components/Dog.tsx";
type DogData = {
  image_link: string;
  name: string;
  max_height_male: string;
  max_height_female: string;
  max_weight_male: string;
  max_weight_female: string;
  good_with_strangers: string;
  good_with_children: string;
  good_with_other_dogs: string;
 }
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, {dog: DogData|undefined, search: string}>) => {
    const url = new URL(_req.url);
    const dog = url.searchParams.get("search") || undefined;
    const API_KEY = "enCOwLncPOpvCrjA32IIHA==KSpRAxqODmQGOZV3";
    if (!API_KEY) {
      return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
    }
    const urlapi = "https://api.api-ninjas.com/v1/dogs?name=" + dog ;
    try {
        if (dog=== undefined){
            return ctx.render({
                dog: undefined,
                search: " "
              });
        }
      const response = await axios.get<DogData[]>(urlapi, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.data === null) {
        return new Response("user not found", { status: 404 });
      }
      return ctx.render({
        dog: response.data[0],
        search: dog
      });
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<{dog: DogData|undefined, search: string}>) => {
  const data = props.data;
  const search = props.data.search

  return (
    <div>
        <form class={"boton"} method="get" target="/dog">
          <input  class={"search"} value = {search} type="text" name="search"/>
          <button class={"buton"}>Buscar</button>
        </form>
        <h1></h1>
        {data.dog !== undefined &&
        <Dog 
        image_link={data.dog.image_link }
         name={data.dog.name}
         max_height_male={data.dog.max_height_male} 
         max_height_female={data.dog.max_height_female}  
         max_weight_male={data.dog.max_weight_male} 
         max_weight_female={data.dog.max_weight_female} 
         good_with_strangers={data.dog.good_with_strangers}
         good_with_children={data.dog.good_with_children}
         good_with_other_dogs={data.dog.good_with_other_dogs}/>

        }
    </div>
  );
};

export default Page;