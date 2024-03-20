import { 
    RouteObject,
    useRoutes
} from 'react-router-dom'

import DefaultPage, { 
    FormPage,
    OtpPage,
    AlertDialogPage
} from "./pages";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <DefaultPage/>,
    },
    {
        path: '/form',
        element: <FormPage/>,
    },
    {
        path: '/alert-dialog',
        element: <AlertDialogPage/>,
    },
    {
        path: '/otp',
        element: <OtpPage/>,
    }
];

export const AppRoutes = () => useRoutes(routes)
