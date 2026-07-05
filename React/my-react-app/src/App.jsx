import TodoItem from "./components/TodoItem";
import Card from "./components/ProductCard";
import Navigation from "./components/Navigation";
import Weather from "./components/Weather";
import RegisterForm from "./components/RegisterForm";
function App(){
  const props  = [
    {id: 1, name: "Iphone X",link: "/"},
    {id: 2, name: "Samsung",link: "/"},
    {id: 3, name: "Hwei",link: "/"}
  ]
  return (
    <>
    <TodoItem/>
    <Card
      image= "/Roshopee.png"
      name="Karichim"
      price= {26000}
      description="Anh gai Han"
    />
    <Navigation menuItems={props}/>

    <Weather weather="sunny"/>
    <Weather weather="rainy"/>
    <Weather weather="cloudy"/>

    <RegisterForm/>
    </>
  );
}
export default App;