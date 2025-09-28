export const siteData = JSON.parse("{\"base\":\"/my-vuepress-site/\",\"lang\":\"en-US\",\"title\":\"My Awesome Site\",\"description\":\"A clean and modern website built with VuePress\",\"head\":[[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"href\":\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\",\"rel\":\"stylesheet\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
