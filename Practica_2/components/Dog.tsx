import { FunctionComponent } from "preact";



type DogProps = {
 image_link: string,
 name: string;
 max_height_male: string;
 max_height_female: string;
 max_weight_male: string;
 max_weight_female: string;
 good_with_strangers: string;
 good_with_children: string;
 good_with_other_dogs: string;

};

const Dog: FunctionComponent<DogProps> = (props) => {
  const { 
    image_link,
    name, 
    max_height_male, 
    max_height_female, 
    max_weight_male, 
    max_weight_female,
    good_with_strangers, 
    good_with_children, 
    good_with_other_dogs } = props;
  return (
    <div class={"contenedorimdog"}> 


         <img src={image_link} />

      <div class={"contenedordatadog"}>
        <ul>
          <li>name: {name}</li>
          <li>Altura_maxima_macho: {max_height_male}</li>
          <li>Altura_maxima_hembra: {max_height_female}</li>
          <li>Peso_maximo_macho: {max_weight_male}</li>
          <li>Peso_maximo_hembra: {max_weight_female}</li>

          <li>Score_Strangers: {good_with_strangers}</li>
          <li>Good_childrens: {good_with_children}</li>
          <li>Good_other_dogs: {good_with_other_dogs}</li>
        </ul>  
      </div>

    </div>
  );
};

export default Dog;