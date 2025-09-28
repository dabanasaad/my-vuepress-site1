import comp from "C:/Users/hp/OneDrive/Desktop/my-vuepress-site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"🚀 Welcome to My Awesome Site\",\"tagline\":\"Building amazing digital experiences with modern technology\",\"actionText\":\"Get Started →\",\"actionLink\":\"/about/\",\"features\":[{\"title\":\"🚀 Fast & Modern\",\"details\":\"Built with the latest technologies for optimal performance and user experience.\"},{\"title\":\"🎨 Beautiful Design\",\"details\":\"Clean, responsive design that looks great on all devices and screen sizes.\"},{\"title\":\"🛠️ Easy to Use\",\"details\":\"Simple and intuitive interface that makes everything easy to find and use.\"},{\"title\":\"📱 Mobile Friendly\",\"details\":\"Fully responsive design that works perfectly on mobile, tablet, and desktop.\"},{\"title\":\"🔒 Secure\",\"details\":\"Built with security best practices to keep your data safe and protected.\"},{\"title\":\"⚡ Lightning Fast\",\"details\":\"Optimized for speed with fast loading times and smooth interactions.\"}],\"footer\":\"Made with ❤️ using VuePress\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
