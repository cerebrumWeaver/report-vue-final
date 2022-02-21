export default {
//   下载关键代码
  download(url, params) {
    return new Promise((resolve, reject) => {
      this.axios({
        //   和后端协商好下载方法post/get?
        method: 'Post',
        url: 'C:\\Users\\cerebrumWeaver\\Desktop\\tms-vue\\public\\static\\1_stat_table' + url,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          // 设置请求头携带的token
          token: JSON.parse(localStorage.getItem('userInfo')).token,
        },
        responseType: 'blob',
      })
        .then((res) => {
          console.log(res);
          const fileName = res.headers['content-disposition'].split('filename=')[1];
          const response = res.data;
          const r = new FileReader();
          r.onload = () => {
            try {
              const resData = JSON.parse(this.result);
              if (resData) {
                if (resData.error_no === undefined) {
                  throw new Error('解析成功！');
                } else if (resData.error_no !== '0') {
                  this.Message({
                    message: resData.error_info || 'Error',
                    type: 'error',
                    duration: 5 * 1000,
                  });
                }
              }
            } catch (err) {
              // 兼容ie11
              if (window.navigator.msSaveOrOpenBlob) {
                try {
                  const blobObject = new Blob([response]);
                  window.navigator.msSaveOrOpenBlob(blobObject, fileName);
                } catch (e) {
                  console.log(e);
                  reject(e);
                }
                return;
              }
              const url = window.URL.createObjectURL(new Blob([response]));
              const link = document.createElement('a');
              link.style.display = 'none';
              link.href = url;
              link.setAttribute('download', fileName);
              document.body.appendChild(link);
              link.click();
            }
          };
          r.readAsText(response);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          this.Message({
            message: '下载失败！',
            type: 'error',
            duration: 5 * 1000,
          });
          reject(error);
        });
    });
  },
};
