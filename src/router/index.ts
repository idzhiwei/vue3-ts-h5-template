import { createRouter,  createMemoryHistory } from "vue-router";
import { constantRouterMap } from "./router.config";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { phoneModel } from "@/utils";
import store from "@/store";
import { isWeChat } from "@/utils";
import { wechatRedirect } from "@/api/WxController";
const notLoginMap = ["Callback","Warning"]

interface IQueryParams {
  code?: string
}

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  // 在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: constantRouterMap
});

// 路由开始进入
router.beforeEach((to, from, next) => {
  useDocumentTitle(to.meta.title);
  const routerName:any = to.name || ''
  //! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
  if (window.entryUrl === undefined) {
    window.entryUrl = location.href.split("#")[0];
  }
  const token = sessionStorage.getItem("token");
  // 微信浏览器内微信授权登陆
  if (isWeChat() && !notLoginMap.includes(routerName) && !token) {
    location.href = wechatRedirect();
  }
  next();
});

router.afterEach((to, from, next) => {
  let url;
  if (phoneModel() === "ios") {
    url = window.entryUrl;
  } else {
    url = window.location.href;
  }
  // 保存url
  store.commit("link/SET_INIT_LINK", url);
});

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  // const targetPath = router.history.pending.fullPath;
  // if (isChunkLoadFailed) {
  //   router.replace(targetPath);
  // }
});
export default router;
