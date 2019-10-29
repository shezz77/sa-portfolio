import Home from '../views/home';
import Privacy from '../views/privacy';

const appRoutes = [
    {
        path: "/",
        title: "Shehzad Aslam",
        component: Home
    },
    {
        path: "/privacy",
        title: "SA 4k privacy",
        component: Privacy
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Home
    }
];

export default appRoutes
