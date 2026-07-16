# React base

React is javascript library (not a framework) used to build user interface(UI). It was development by Facebook(Meta). Key features:

1. Component-based: the user interface is divided into independent , reusable components
2. Declarative: you describe what the UI should lock like based on the state, and Reac automatically updates the DOM when the state changes.
3. Virtual DOM: React uses a virtural copy of the real DOM to optimize performance when updating the user interface

## Set up the project

```
#with vite
npm create vite@latest my-app -- --template react

cd my-app
npm i (npm install)
npm run dev
```

## JSX

JSX is syntax extension that allows you write HTML inside JS

EX:

```
function Greeting(){
    const name = "Tan";
    return (
        <div className = "hello">
            <h1>Hi, {name}!</h1>
        </div>
    )
}
```

**Notes on JSX**:

1. use className instead of class
2. Each component can only return a single root element(you can use <>....</> Fragment to warp multiple elements)
3. Js expressions are enclose in {}

## Components

2 type of components : Function Components(most commonly used today) and Class Components(useless)
EX Function Components:

```
//function Component
function Welcome(props){
    return <h2> Hi,{props.name}</h2>
}
<Welcome name = "Tan" />
```

## Props

Props(properties): is data passed from parent componet to a child component and is read-only.

```
function UserCard({name, age}){
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}
<UserCard name= "Tan" age={25}/>
```

## State Hook

State is internal data of a componet that can changed and when is changes, is causes the component re-render

```
import {useState} from "react";
function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {cont}</p>
            <button onClick={()=> setCount(count + 1)}>Increase 1</button>
        </div>
    );
}
```

# Hook

- Khong goi hook trong if,for,while,switch,callback,nested function vi no se khien thu tu thay doi
- chi goi hook tu React functions (React component)

## ReactHook

- useState: state current and state next,
- useReduce: [element,dispatch] = (function(state,action),initState) ,
- useContext:<ThemeContext.Provider value={{theme,SwitchTheme}}>
  {children}
  </ThemeContext.Provider>
- useEffect: (()=>{},[whenThisElementChange])

# React Router

Setup React Router v6: npm install react-router-dom

## Basic concepts

1. Router : main Container management routing
2. Routes: Container containing route definitions
3. Route: Define path and the corresponding component
4. Link/NavLink : Navigation components
5. Navigate: Programmatic navigation
6. Outlet: Render nested routes

### bai 3

/products?category=laptop&page=2

category=laptop
page=2

đều là search params.

```
import { useSearchParams } from "react-router-dom";

export default function Products() {
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    const page = searchParams.get("page");

    return (
        <>
            <p>Category: {category}</p>
            <p>Page: {page}</p>
        </>
    );
}
result : Category: phone
        Page: 3
```

**Thay doi search params**:

```
const [searchParams, setSearchParams] = useSearchParams();

<button onClick={() => setSearchParams({ page: 2 })}>
    Page 2
</button>
```

chuyen tu /product -> /product?page=2

- input chi la tim theo ten, con muon tim theo (category, price...) thi phai tren local host: search?

### bai 4

useNavigate(): dung de chuyen huong giua cac trang bang js , thay vi nguoi dung phai nhan vao mot the Link (const navigate = useNavigate();)

```
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Kiểm tra đăng nhập thành công...

        navigate("/dashboard");
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}
```

Khi dang nhap thanh cong ,React Router se chuyen sang /dashboard

useLocation(): 1 hook cua react Router dung de lay thong tin Url ve hien tai, noi chung la de doc vi tri hien tai cua ung dung

```
import { useLocation } from "react-router-dom";
const location = useLocation();
console.log(location);
//result = {
  pathname: "/products",
  search: "?category=phone",
  hash: "#review",
  state: null,
  key: "abc123"
}
```

vidu: http://localhost:5173/products?category=phone#review

## Stage manament
- autoFocus: tu dat tro vao 1 phan tu khi no duoc render
- createSlice: la mot ham cua redux toolkit giup ban tao reducer + action mot cach ngan gon ma khong can phai viet switch case
- Provider: dung de dua Redux Store cho toan bo ung dung
```import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
```

- useSelector:doc du lieu (state tu Store)
```
{
  auth: {
    user: "Tan"
  },

  cart: {
    items: [ ... ]
  }
}
//doc ten nguoi dung:
const user = useSelector(state => state.auth.user);
```
- useDispath; gui action den redux
```
const dispatch = useDispatch();
dispatch(login(user));
```