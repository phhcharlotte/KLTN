export default defineNuxtRouteMiddleware(() => {
    const accessToken = useCookie("access_token");
  
    if (!accessToken.value) {
      return navigateTo({
        name: "login",
      });
    } else {
      return navigateTo({
        name: "home",
      });
    }
  });
  