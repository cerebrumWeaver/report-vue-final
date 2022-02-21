import axios from 'axios'
import { ElMessage } from 'element-plus'

// export function exportAnalysisHooks = (url) => {
export function exportAnalysisHooks(url) {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.defaults.responseType = 'blob'
  axios
    .post(
      url,
      {},
      {
        headers: {
          Authorization: window.localStorage.getItem('analysis_platform_accessToken') || '',
        },
      }
    )
    .then((res) => {
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
      const fileName = decodeURI(res.headers['content-disposition'])
      if ('download' in document.createElement('a')) {
        // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
    })
    .catch((err) => {
      console.log(err.response)
      ElMessage.error(err.response.data.message || '请求失败')
    })
}
/*export default exportAnalysisHooks*/
