import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import strip from '@rollup/plugin-strip'
import viteCompression from 'vite-plugin-compression'
import path from 'path-browserify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'

// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons,transformerDirectives,
  transformerVariantGroup } from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],

      //dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      dts: "src/autoImport.d.ts"
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],

      //dts: path.resolve(pathSrc, 'components.d.ts')
      dts: 'src/components.d.ts'
    }),
    // 使用Unocss
    Unocss({ 
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()],
        rules: [ // 在这个可以增加预设规则, 也可以使用正则表达式
        [
          'p-c', // 使用时只需要写 p-c 即可应用该组样式
          {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`
          }
        ],
        //[/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),

    Icons({
      autoInstall: true
    }),

    Inspect(),

    //正式环境打包查看各文件大小占比
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),
    //正式环境打包去除调试语句
    {
      ...strip({
        include: ['**/*.js', '**/*.vue', '**/*.ts', '**/*.jsx']
      }),
      apply: 'build'
    },
    //打包开启gzip压缩
    viteCompression()
  ],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      '@': path.resolve(__dirname, '/src/'),
      '~/': `${pathSrc}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //添加scss全局变量样式
        additionalData: "@import './src/styles/global.scss';"
      }
    }
  },
  server: {
    // 配置调试服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    port: 3001, // 服务器端口号
    open: true // 是否自动打开浏览器
  }
})
