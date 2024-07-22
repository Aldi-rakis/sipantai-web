//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from '../pages/admin/Login.jsx';

//import component private routes
import PrivateRoute from "./PrivateRoutes";
import PrivateRouteAdmin from "./PrivateRoutesAdmin";
import PrivateRouteUser from "./PrivateRoutesUser";

//import view admin Dashboard
import Dashboard from '../pages/admin/dashboard/Index.jsx';

//import view admin categories Index
import CategoriesIndex from '../pages/admin/categories/Index.jsx';

//import view admin category Create
import CategoryCreate from '../pages/admin/categories/Create.jsx';

//import view admin category Edit
import CategoryEdit from '../pages/admin/categories/Edit.jsx';

//import view admin places Index
import PlacesIndex from '../pages/admin/places/Index.jsx';

//import view admin places Create
import PlaceCreate from '../pages/admin/places/Create.jsx';

//import view admin places Edit
import PlaceEdit from '../pages/admin/places/Edit.jsx';

//import view admin sliders Index
import SlidersIndex from '../pages/admin/sliders/Index.jsx';

//import view admin slider Create
import SliderCreate from '../pages/admin/sliders/Create.jsx';

//import view admin users Index
import UsersIndex from '../pages/admin/users/Index.jsx';

//import view admin user Create
import UserCreate from '../pages/admin/users/Create.jsx';

//import view admin user Edit
import UserEdit from '../pages/admin/users/Edit.jsx';

import PengaduanIndex from "../pages/admin/pengaduan/Index.jsx";


//Import Berita
import BeritaIndex from "../pages/admin/berita/index.jsx";
import BeritaCreate from "../pages/admin/berita/Create.jsx";
import BeritaEdit from "../pages/admin/berita/Edit.jsx";



//=======================================================================
//WEB
//=======================================================================

//import view web Home
import Home from '../pages/web/home/Index.jsx'; 
import Home3 from "../pages/cek/home/Index.jsx";

import Category from "../pages/web/category/Index.jsx" 

//import pengaduan 
import Pengaduanweb from "../pages/web/Pengaduan/Index.jsx";
import Register from "../pages/web/Pengaduan/Regist.jsx"
import LoginPengaduan from "../pages/web/Pengaduan/Login.jsx"

//import view web category Show
import WebCategoryShow from '../pages/web/category/Show.jsx';

//import view web place Index
import WebPlacesIndex from '../pages/web/places/Index.jsx'; 

//import view web place Show
import WebPlaceShow from '../pages/web/places/Show.jsx';


import WebPlaceDirection from '../pages/web/places/Direction.jsx';


//import view web maps
import WebMapsIndex from "../pages/web/maps/Index.jsx";  

import Berita from "../pages/web/berita/Index.jsx";

//import view web search
import WebSearch from '../pages/web/search/Index.jsx';
import LayoutAdmin from "../layouts/Admin.jsx";
import PengaduanDetailPage from "../pages/admin/pengaduan/Detail.jsx";
import Datapengaduan from "../pages/web/datapengaduan/Index.jsx";
import Detaildatapengaduan from "../pages/web/datapengaduan/Detail.jsx";

import BeritaShow from "../pages/web/berita/show.jsx";



function RoutesIndex() {
    return (
        <Routes>

            {/* route "/admin/login" */}
            <Route path="/admin/login" element={<Login />} />

            {/* private route "/admin/dashboard" */}
            <Route
               path="/admin/*" 
                element={
                        <PrivateRouteAdmin>
                           <Dashboard/>

                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/categories" */}
            <Route
                path="/admin/categories"
                element={
                    <PrivateRouteAdmin>
                    <CategoriesIndex/>

                 </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/categories/create" */}
            <Route
                path="/admin/categories/create"
                element={
                        <PrivateRouteAdmin>
                            <CategoryCreate />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/categories/edit/:id" */}
            <Route
                path="/admin/categories/edit/:id"
                element={
                        <PrivateRouteAdmin>
                            <CategoryEdit />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/places" */}
            <Route
                path="/admin/places"
                element={
                        <PrivateRouteAdmin>
                            <PlacesIndex />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/places/create" */}
            <Route
                path="/admin/places/create"
                element={
                        <PrivateRoute>
                            <PlaceCreate />
                        </PrivateRoute>
                }
            />

            {/* private route "/admin/places/edit/:id" */}
            <Route
                path="/admin/places/edit/:id"
                element={
                        <PrivateRouteAdmin>
                            <PlaceEdit />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/sliders" */}
            <Route
                path="/admin/sliders"
                element={
                        <PrivateRouteAdmin>
                            <SlidersIndex />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/sliders/create" */}
            <Route
                path="/admin/sliders/create"
                element={
                        <PrivateRouteAdmin>
                            <SliderCreate />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/users" */}
            <Route
                path="/admin/users"
                element={
                        <PrivateRouteAdmin>
                            <UsersIndex />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/users/create" */}
            <Route
                path="/admin/users/create"
                element={
                        <PrivateRouteAdmin>
                            <UserCreate />
                        </PrivateRouteAdmin>
                }
            />

            {/* private route "/admin/users/edit/:id" */}
            <Route
                path="/admin/users/edit/:id"
                element={
                        <PrivateRouteAdmin>
                            <UserEdit />
                        </PrivateRouteAdmin>
                } 
            />

             {/* private route "/admin/pengaduan/ */}
             <Route
                path="/admin/pengaduan"
                element={
                        <PrivateRouteAdmin>
                            <PengaduanIndex />
                        </PrivateRouteAdmin>
                } 
            />


                {/* private route "/admin/pengaduan/ */}
                <Route
                path="/admin/pengaduan/detail/:id"
                element={
                        <PrivateRouteAdmin>
                            <PengaduanDetailPage />
                        </PrivateRouteAdmin>
                } 
            />


            {/* private route "/admin/berita/ */}
            <Route
                            path="/admin/berita/"
                            element={
                                    <PrivateRouteAdmin>
                                        <BeritaIndex />
                                    </PrivateRouteAdmin>
                            } 
                        />
             

               {/* private route "/admin/berita/ */}
               <Route
                path="/admin/berita/create"
                element={
                        <PrivateRouteAdmin>
                            <BeritaCreate />
                        </PrivateRouteAdmin>
                } 
            />

     {/* private route "/admin/berita/ */}
     <Route
                path="/admin/berita/edit/:id"
                element={
                        <PrivateRouteAdmin>
                            <BeritaEdit />
                        </PrivateRouteAdmin>
                } 
            />










            {/* route "/" */}
            <Route path="/" element={<Home />} />


              {/* route "/" */}
              <Route path="/cek" element={<Home3 />} /> 

              
              {/* route "/" */}
              <Route path="/categories" element={<Category />} /> 

              
              {/* route "/"
              <Route path="/kategori" element={<Category />} /> */}


            {/* route "/category/:slug" */}
            <Route path="/category/:slug" element={<WebCategoryShow />} />

            {/* route "/places" */}
            <Route path="/places" element={<WebPlacesIndex />} /> 

              {/* route "/places/:slug" */}
              <Route path="/places/:slug" element={<WebPlaceShow />} />

              
            {/* route "/places/:slug/direction" */}
            <Route path="/places/:slug/direction" element={<WebPlaceDirection />} /> 

               {/* route "/maps" */}
               <Route path="/maps" element={<WebMapsIndex />} />

                {/* route "/pengaduan" */}
                {/* <Route path="/pengaduan" 
                element={<Pengaduan />} />  */}

            <Route path="/pengaduan" element=
            {
                        <PrivateRouteUser>
                            <Pengaduanweb />
                        </PrivateRouteUser>
                }
            />

            
                 {/* route "/datapengaduan" */}
                 <Route path="/datapengaduan" element={<Datapengaduan />} /> 

                  {/* route "/pengaduan/regist" */}
                  <Route  path="/datapengaduan/detail/:id" element={<Detaildatapengaduan />} /> 


                 {/* route "/pengaduan/regist" */}
                 <Route path="/pengaduan/regist" element={<Register />} /> 
                   {/* route "/pengaduan/login" */}
                   <Route path="/pengaduan/login" element={<LoginPengaduan />} /> 


               
               
            {/* route "/berita" */}
            <Route path="/search" element={<WebSearch />} />

                 
            {/* route "/search" */}
            <Route path="/berita" element={<Berita />} />
                 
            {/* route "/search" */}
            <Route path="/berita/:id" element={<BeritaShow />} />

        </Routes>
    )
}

export default RoutesIndex