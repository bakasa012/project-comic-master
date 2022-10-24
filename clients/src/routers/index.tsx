import RequireAuthComponent from '../components/Auth.component/RequireAuth.component';
import ProjectComicLayout from '../layouts/project-comic.layouts';
import AlbumComponent from '../pages/album';
import ContactComponent from '../pages/contacts';
import HomePageComponent from '../pages/home';
import LoginComponent from '../pages/logins';
import PageNotFound from '../pages/page-not-found';

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
        path: 'contact',
        component: <ContactComponent />,
      },
      {
        path: 'user',
        component: <HomePageComponent />,
      },
      {
        path: 'album',
        component: <AlbumComponent />,
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
        component: <div>cccccccccccccccccccccc</div>,
      },
      {
        path: 'user',
        component: <div>bbbbbbbbbbbbbbbbbbbbbbbbbbb</div>,
      },
    ],
  },

  {
    path: '*',
    component: <PageNotFound />,
  },
];

export default routers;
