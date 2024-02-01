export default (axios) => ({
    login(data) {
      return axios({
        url: "/auth/company/login",
        method: "post",
        data,
      });
    },
    logout() {
      return axios({
        url: "/auth/company/logout",
        method: "post",
      });
    },
    forgotPassWord(data) {
      return axios({
        url: "/auth/company/forgot-password",
        method: "post",
        data,
      });
    },
    register(data) {
      return axios({
        url: "/auth/company/register",
        method: "post",
        data,
      });
    },
    registeCompanyInfo(data) {
      return axios({
        url: "/company/basic-info/register",
        method: "post",
        data,
      });
    },
    me() {
      return axios({
        url: "/auth/company/me",
        method: "get",
      });
    },
    verify(data) {
      return axios({
        url: "/verify-code",
        method: "post",
        data,
      });
    },
    requestNewVerifyCode() {
      return axios({
        url: "/resend-confirm-email",
        method: "post",
      });
    },
    changePassWord(data) {
      return axios({
        url: "/company/change-password",
        method: "post",
        data,
      });
    },
  });
  