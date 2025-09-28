export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"🏠 Home\",\"link\":\"/\"},{\"text\":\"👋 About\",\"link\":\"/about/\"},{\"text\":\"⚙️ Services\",\"children\":[{\"text\":\"💻 Web Development\",\"link\":\"/services/web-development\"},{\"text\":\"🎨 Design\",\"link\":\"/services/design\"},{\"text\":\"💡 Consulting\",\"link\":\"/services/consulting\"}]},{\"text\":\"📝 Blog\",\"link\":\"/blog/\"},{\"text\":\"📞 Contact\",\"link\":\"/contact/\"}],\"sidebar\":{\"/blog/\":[{\"text\":\"📝 Recent Posts\",\"children\":[\"/blog/README.md\",\"/blog/getting-started.md\",\"/blog/web-development-tips.md\"]}]},\"editLink\":false,\"lastUpdated\":true,\"contributors\":false,\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
