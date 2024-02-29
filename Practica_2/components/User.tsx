import { FunctionComponent } from "preact";

type UserProps = {
  name: string;
  sex: string;
  email: string;
  address: string;
};


const User: FunctionComponent<UserProps> = (props) => {
  const { name, sex, email, address } = props;
  return (
    <div class={"contenedoruser"}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>

      <div class={"contenedoruser2"}>
        <h1 class="glyphicon glyphicon-user circle"></h1>
        <h1  >{name}</h1>
      </div>
      <div class="linea"></div>
      <div class={"contenedoruser3"}>
        <h2 class="fa fa-envelope">{" "+email}</h2>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h2 class="fa fa-venus-mars">{" "+sex}</h2>
        <h2 class="fa fa-map">{" "+address}</h2>
      </div>

    </div>
  );
};

export default User;