import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/jbook/',
  title: '日本語の日常🍵',
  description: '就一帮对跟日语学习一毛钱关系都没有的人找了一位日语教师来整理核对出来的日语学习资料，顺便记录一下各种各样的日常生活',
  themeConfig: {
    nav: [
      { text: '五十音', link: '/gojuon' },
      { text: '词汇', link: '/word' },
      { text: '语法', link: '/grammer' },
      { text: '阅读', link: '/read' },
      { text: '听力', link: '/listen' },
    ],
  },
});