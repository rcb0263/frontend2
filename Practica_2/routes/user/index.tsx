import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import User from "../../components/User.tsx";

type UserData = {
    name: string;
    sex: string;
    email: string;
    address: string;
  };
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, UserData>) => {
    const API_KEY = "enCOwLncPOpvCrjA32IIHA==KSpRAxqODmQGOZV3";
    if (!API_KEY) {
      return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
    }
    const url = "https://api.api-ninjas.com/v1/randomuser" ;
    try {
      const response = await axios.get<UserData>(url, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.data === null) {
        return new Response("user not found", { status: 404 });
      }
      return ctx.render(response.data);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<UserData>) => {
  const data = props.data;
  return (
    <div>
      <User name={data.name} email={data.email} sex={data.sex}  address={data.address} />
    </div>
  );
};

export default Page;