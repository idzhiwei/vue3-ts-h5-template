import request from '@/utils/request'
import { IResponseType  } from "./interface";
const baseUrl = "/xxxxx"

/**
 * 登录换取token
 * @param params
 * @param loading
 */
export const exchangeToken = (params:any,loading=true) => {
  return request<IResponseType<any>>({
    url: `${baseUrl}.TokenAsync`,
    method: 'get',
    loading,
    params
  })
}
