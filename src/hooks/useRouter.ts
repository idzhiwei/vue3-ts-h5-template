/**
 * @Description: 路由跳转
 * @author JAm
 * @date 2022/02/18 11:23:07
 *
 */

//注意：这里不能直接 import { useRouter } from "vue-router"，
// useRoute, useRouter必须写到setup中，若强行写在hooks函数中就会undefined
import HooksRouter from '@/router'

const pathMap = {
  //热点新闻
  home: '/home',
}

/**
 * @param type 跳转地址
 * @param query：查询参数
 * @param isReplace：是否为replace的方式
 */
export default function routeTo(type: string, query = {}, isReplace = false) {
  if (!type) return
  let path = pathMap[type]
  if (!path) return
  const { push, replace } = HooksRouter
  isReplace ? replace({ path, query }).catch(handleError) : push({ path, query }).catch(handleError)
}

//错误信息
function handleError(e: any) {
  console.error('hooks路由跳转', e)
}
