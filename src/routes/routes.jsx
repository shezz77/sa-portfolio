import Home from '../views/home';
import Privacy from '../views/privacy';
import DynamicPrivacy from '../views/dynamic-privacy';

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
        path: "/privacy/:appName",
        title: "Dynamic privacy",
        component: DynamicPrivacy
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Home
    }
];

export default appRoutes
