export default [
  {
    path: "/kurs/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-kurs-vue" */ "/Users/benediktmix/dev/sc-suite/src/templates/ContentfulKurs.vue")
  },
  {
    path: "/blog/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--contentful-blog-post-vue" */ "/Users/benediktmix/dev/sc-suite/src/templates/ContentfulBlogPost.vue")
  },
  {
    path: "/team/",
    component: () => import(/* webpackChunkName: "page--src--pages--team-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Team.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/success.vue")
  },
  {
    path: "/partner/",
    component: () => import(/* webpackChunkName: "page--src--pages--partner-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Partner.vue")
  },
  {
    path: "/kurse/",
    component: () => import(/* webpackChunkName: "page--src--pages--kurse-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Kurse.vue")
  },
  {
    path: "/jobs/",
    component: () => import(/* webpackChunkName: "page--src--pages--jobs-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Jobs.vue")
  },
  {
    path: "/impressum/",
    component: () => import(/* webpackChunkName: "page--src--pages--impressum-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Impressum.vue")
  },
  {
    path: "/fuer-unternehmen/",
    component: () => import(/* webpackChunkName: "page--src--pages--fuer-unternehmen-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/FuerUnternehmen.vue")
  },
  {
    path: "/faqs/",
    component: () => import(/* webpackChunkName: "page--src--pages--faqs-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Faqs.vue")
  },
  {
    path: "/data-privacy/",
    component: () => import(/* webpackChunkName: "page--src--pages--data-privacy-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/DataPrivacy.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Contact.vue")
  },
  {
    path: "/class/",
    component: () => import(/* webpackChunkName: "page--src--pages--class-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Class.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Blog.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/benediktmix/dev/sc-suite/src/pages/404.vue")
  }
]

