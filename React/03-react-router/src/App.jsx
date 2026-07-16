import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import Product from "../pages/Products";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Publiclayout from "../layouts/Publiclayout";
import Categories from "../pages/Categories";
import Postdetail from "../blog/Postdetail";
import Authors from "../blog/Authors";
import AuthorProfile from "../blog/Authorprofile";
import AdminLayout from "../layouts/Adminlayout";
import AdminDashBoard from "../blog/admin/AdminDashBoard";
import AdminPostList from "../blog/admin/AdminPostList";
import AdminPostForm from "../blog/admin/AdminPostForm";
import AdminCategorylist from "../blog/admin/AdminCategorylist";
import AdminAuthorList from "../blog/admin/AdminAuthorlist";
import NotFound from "../blog/Notfound";

//:id, ":" hieu la tham so dong
function App() {
    return (
        <>
            {/* Chay Bai1
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Product />}></Route>
                <Route path="/products/:id" element={<ProductDetail />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<CheckOut />}></Route>
            </Routes> */}

            {/*cho phep chuyen giua cac trang ma khong can tai lai*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Publiclayout />}>
                        <Route index element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/categories/:categorySlug" />
                        <Route path="/posts/:postId" element={<Postdetail />} />
                        <Route path="/authors" element={<Authors />} />
                        <Route
                            path="/authors/:authorId"
                            element={<AuthorProfile />}
                        />
                    </Route>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashBoard />} />
                        <Route path="posts" element={<AdminPostList />} />
                        <Route path="posts/new" element={<AdminPostForm />} />
                        <Route
                            path="posts/:postId/edit"
                            element={<AdminPostForm />}
                        />
                        <Route
                            path="categories"
                            element={<AdminCategorylist />}
                        />
                        <Route path="authors" element={<AdminAuthorList />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
