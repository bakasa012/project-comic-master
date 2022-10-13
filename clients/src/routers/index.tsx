import RequireAuthComponent from '../components/Auth.component/RequireAuth.component';
import ProjectComicLayout from '../layouts/project-comic.layouts';
import LoginComponent from '../pages/logins';

const routers = [
  {
    path: '/',
    component: <ProjectComicLayout />,
    routers: [
      {
        path: '/',
        component: <div>aaaaaaaaaaaaaaaaaaaaaaaa</div>,
      },
      {
        path: 'user',
        component: <div>bbbbbbbbbbbbbbbbbbbbb</div>,
      },
    ],
  },

  {
    path: '/login',
    component: <LoginComponent />,
  },

  {
    path: 'protected/',
    component: (
      <RequireAuthComponent>
        <ProjectComicLayout />
      </RequireAuthComponent>
    ),
    routers: [
      {
        index: true,
        // path: 'protected',
        component: <div>aaaaaaaaaaaaaaaaaaaaaaaa</div>,
      },
      {
        path: 'user',
        component: <div>bbbbbbbbbbbbbbbbbbbbb</div>,
      },
    ],
  },

  {
    path: '*',
    component: <div>Page Not Found</div>,
  },
];

export default routers;
