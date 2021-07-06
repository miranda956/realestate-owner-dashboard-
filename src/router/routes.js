// @ts-ignore
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
// @ts-ignore
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
// @ts-ignore
import Dashboard from "@/pages/Dashboard.vue";
// @ts-ignore
// @ts-ignore

// @ts-ignore
import Icons from "@/pages/Icons.vue";
// @ts-ignore
import TableList from "@/pages/TableList.vue";


//import AddTenant from "../pages/Tenant/addTenant.vue";
import ListTenant from "../pages/Tenant/listTenant.vue";
import EditTenant from "../pages/Tenant/EditTenant.vue";
import DetailTenant from "../pages/Tenant/TenantDetail.vue";
import TenantLeases from "../pages/Tenant/TenanntLeases.vue";
import CreateProperty from "../pages/property/Addproperty.vue";
import DetailProperty from "../pages/property/DetailProperty.vue";
import EditProperty from "../pages/property/EditProperty.vue";
import ListProperty from "../pages/property/ListProperty.vue";
import ListLeases from "../pages/Leases/ListLeases.vue";
import Invoices from "../pages/Invoices /invoices.vue";
import Profile from "../pages/Profile/Profile.vue"
import Security from "../pages/Security/ChangePassword.vue"
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },


      {
        path:'ListLeases',
        name:'ListLeases',
        component:ListLeases

      },


      {
        path:'EditTenant',
        name:'EditTenant',
        component:EditTenant
      },
      {
        path:'ListTenant',
        name:'ListTenant',
        component:ListTenant
      },
      {
        path:'TenantDetail',
        name:'TenantDetail',
        component:DetailTenant
      },
      {
        path:'TenantLeases',
        name:'TenantLeases',
        component:TenantLeases
      },
      {
        path:'CreateProperty',
        name:'CreateProperty',
        component:CreateProperty
      },
      {
        path:'Editproperty',
        name:'EditProperty',
        component:EditProperty
      },
      {
        path:'DetailProperty',
        name:'Detailproperty',
        component:DetailProperty
      },
      {
        path:'ListProperty',
        name:'Listproperty',
        component:ListProperty
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },




      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path:"Invoices",
        name:"Invoices",
        component:Invoices
      },
      {
        path:"Profile",
        name:"Profile",
        component:Profile
      },
      {
        path:"Security",
        name:"Security",
        component:Security
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
