import Home from '../views/home';

const appRoutes = [
    {
        path: "/",
        title: "Shehzad Aslam",
        component: Home
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Home
    }
];

export default appRoutes