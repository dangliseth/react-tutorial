import create from "./http-service";

export interface Results {
  id: number,
  name: string,
  released: string,
  rating: number,
  background_image: string,
};

export interface List {
  count: number,
  results: Results[]
}



export default create("/games");
