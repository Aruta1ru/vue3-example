import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/Main'
import PostPage from '@/pages/PostPage'
import Post1Page from '@/pages/Post1Page'
import PostPageWithStore from '@/pages/PostPageWithStore'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi'
import About from '@/pages/About'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: Post1Page
  },
  {
    path: '/store',
    component: PostPageWithStore
  },
  {
    path: '/composition',
    component: PostPageCompositionApi
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;