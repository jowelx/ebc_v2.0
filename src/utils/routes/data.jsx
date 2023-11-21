//import react-router-dom v6
import { createBrowserRouter } from "react-router-dom";
//import components routes
import Layout from "../../Layout";
import ErrorPage from "../../error-page";
//#region import landing
import Landing from "../../Routes/Landing";
//#endregion
//#region import login
import Login from "../../Routes/Login";
import Register from "../../Routes/Register";
import Forgot from "../../Routes/Forgot";
import ChangePass from "../../Routes/ChangePass";
//#endregion
//#region import rabbits
import ViewRabbits from "../../Routes/Rabbits/ViewRabbits";
import ViewAllRabbits from "../../Routes/Rabbits/ViewAllRabbits";
//#endregion
//#region import market
import Market from "../../Routes/Market";
import BreedInventory from "../../Routes/Market/BreedInventory";
import RabbitDetails from "../../Routes/Market/RabbitDetails";
//#endregion
//#region import cage
import ViewCage from "../../Routes/Cage/ViewCage";
import ViewStepOne from "../../Routes/Cage/CageStepOne/ViewStepOne";
import ViewFormOne from "../../Routes/Cage/CageStepOne/CageStepOneForm/ViewFormOne";
import ViewStepTwo from "../../Routes/Cage/CageStepTwo/ViewStepTwo";
import ViewFormTwo from "../../Routes/Cage/CageStepTwo/CageStepTwoForm/ViewFormTwo";
import ViewStepThree from "../../Routes/Cage/CageStepThree/ViewStepThree";
import ViewDetails from "../../Routes/Cage/CageDetails/ViewDetails";
import ViewCageEdit from "../../Routes/Cage/CageDetails/CageEdit/ViewCageEdit";
//#endregion
//#region import farms
import Farms from "../../Routes/Farms";
import FarmDetail from "../../Routes/Farms/FarmDetail";
import FarmCageRabbit from "../../Routes/Farms/FarmCageRabbit";
//#endregion
//#region import litters
import Litters from "../../Routes/Litters";
//#endregion
//#region import profile
import ProfileHome from "../../Routes/ProfileHome";
import EditProfile from "../../Routes/EditProfile";
//#endregion
import AboutUs from '../../Components/AboutUs';
import UpdateImage from "../../Routes/UpdateImage";

//implement routes with react-router-dom
export const routes = createBrowserRouter([
  //#region routes for landing
  {
    path: "/",
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  //#endregion
  //#region routes for market
  {
    path: "/market",
    element: (
      <Layout>
        <Market />
      </Layout>
    ),
  },
  {
    path: "/market/:breed",
    element: (
      <Layout>
        <BreedInventory />
      </Layout>
    ),
    loader: ({ params }) => params.breed,
  },
  {
    path: "/market/rabbit/:rabbitId",
    element: (
      <Layout>
        <RabbitDetails />
      </Layout>
    ),
    loader: ({ params }) => params.rabbitId,
  },
  //#endregion
  //#region routes for authentication
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/forgot",
    element: (
      <Layout>
        <Forgot />
      </Layout>
    ),
  },
  {
    path: "/changepass",
    element: (
      <Layout>
        <ChangePass />
      </Layout>
    ),
  },
  //#endregion
  //#region routes for rabbits
  {
    path: "/rabbits",
    element: (
      <Layout>
        <ViewAllRabbits/>
      </Layout>
    ),
  },
  {
    path: "/rabbits/:rabbitId",
    element: (
      <Layout>
        <ViewRabbits />
      </Layout>
    ),
  },
  //#endregion
  //#region routes for cage
  {
    path: "/cage",
    element: (
      <Layout>
        <ViewCage />
      </Layout>
    ),
  },
  {
    path: "/cage/step1",
    element: (
      <Layout>
        <ViewStepOne />
      </Layout>
    ),
  },
  {
    path: "/cage/step1/createcage",
    element: (
      <Layout>
        <ViewFormOne />
      </Layout>
    ),
  },
  {
    path: "/cage/step2",
    element: (
      <Layout>
        <ViewStepTwo />
      </Layout>
    ),
  },
  {
    path: "/cage/step2/addrabbit/:cageId",
    element: (
      <Layout>
        <ViewFormTwo />
      </Layout>
    ),
    loader: ({ params }) => params.cageId,
  },
  {
    path: "/cage/step3",
    element: (
      <Layout>
        <ViewStepThree />
      </Layout>
    ),
  },
  {
    path: "/cage/details",
    element: (
      <Layout>
        <ViewDetails />
      </Layout>
    ),
  },
  {
    path: "/cage/details/edit",
    element: (
      <Layout>
        <ViewCageEdit />
      </Layout>
    ),
  },
  //#endregion
  //#region routes for farms
  {
    path: "/farms",
    element: (
      <Layout>
        <Farms />
      </Layout>
    ),
  },
  {
    path: "/farms/:farmId",
    element: (
      <Layout>
        <FarmDetail />
      </Layout>
    ),
    loader: ({ params }) => params.farmId,
  },
  {
    path: "/farms/:farmId/cages/:cageId",
    element: (
      <Layout>
        <FarmCageRabbit />
      </Layout>
    ),
    loader: ({ params }) => {
      return {
        farmId: params.farmId,
        cageId: params.cageId,
      };
    },
  },
  //#endregion
  //#region routes for profile
  {
    path: "/profile",
    element: (
      <Layout>
        <ProfileHome />
      </Layout>
    ),
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },  
  //#endregion
  //#region routes for UpdateImage
  {
    path: "/updateimage/:id",
    element: (
      <Layout>
        <UpdateImage />
      </Layout>
    ),
    loader: ({ params }) => params.id,
  },
  //#endregion
  //#region routes for litters: stop implementing
  {
    path: "/litters",
    element: <Litters />,
  },
  //#endregion
  //#region about us
  {
    path: "/about",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  }
  //#endregion
]);
