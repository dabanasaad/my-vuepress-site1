import comp from "C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/contact/index.html.vue"
const data = JSON.parse("{\"path\":\"/contact/\",\"title\":\"📞 Contact Us\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"contact/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
