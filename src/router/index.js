import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
 
const routes=[
{
  path:"/RecommendSongs",
  component:()=>import("../views/RecommendSongs.vue"),
 
},
{
  path:"/Hotsongs",
  component:()=>import("../views/Hotsongs.vue"),
 
},
{
  path:"/Search",
  component:()=>import("../views/Search.vue"),
 
}
]
 
const router = new VueRouter({
        routes,
        mode: 'history'
    })
 
export default router