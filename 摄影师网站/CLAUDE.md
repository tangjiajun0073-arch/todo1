# CLAUDE.md

本文件为 Claude Code 在本仓库中工作时提供指导。

## 命令

```bash
npm run dev      # 开发服务器（Next.js，端口 3000）
npm run build    # 生产构建 → .next/
npm start        # 启动生产服务器
```

## 架构

基于 **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** 构建的单页摄影师作品集网站。

所有板块位于同一页面（`src/app/page.tsx`），通过平滑滚动锚点导航。无路由页面、无服务端数据请求——网站完全静态，仅在需要交互处进行客户端渲染。

**状态管理**：灯箱索引和画廊分类筛选状态通过 `useState` 存放在 `page.tsx`，以 props 向下传递。无全局状态或 Context。

**组件树**：`page.tsx` → `Navbar` + `Hero` + `Gallery` + `Lightbox` + `About` + `Contact` + `Footer`。`Lightbox` 按条件渲染。

**`'use client'` 边界**：仅交互组件为客户端组件——`Navbar`、`Gallery`、`Lightbox`、`Contact` 和 `page.tsx`。`Hero`、`About`、`Footer` 为服务端组件。

## 设计系统（Tailwind v4）

自定义主题令牌在 `src/app/globals.css` 中通过 `@theme inline` 定义：

| 令牌 | 值 | 用途 |
|---|---|---|
| `accent` | `#c9a96e` | 金色点缀、活跃状态 |
| `accent-hover` | `#d4b87a` | 按钮悬停 |
| `surface` | `#0d0d0d` | 基础背景 |
| `surface-raised` | `#111` | 板块背景 |
| `surface-input` | `#1a1a1a` | 表单输入框背景 |

字体：**Noto Sans SC**（300/400/700），通过 `next/font/google` 在 `layout.tsx` 中加载。

自定义动画：`animate-fade-up`（透明度 + 上移）、`animate-scroll-mouse`（首屏滚动指示器）。

## 关键模式

- **滚动监听**（`Navbar.tsx`）：通过 `useEffect` + scroll 事件查询 `section[id]` 来判断当前活跃导航链接。
- **淡入显示**（`useScrollReveal` hook）：每个组件使用 `IntersectionObserver` 切换 Tailwind 类来触发 `animate-fade-up`。`Gallery` 和 `About` 使用。
- **灯箱**（`Lightbox.tsx`）：键盘导航（Esc/←/→），通过 `document.body.style.overflow` 锁定页面滚动。
- **画廊数据**：`src/data/images.ts`——带类型的 `ImageItem[]` 及分类联合类型。筛选为客户端 `useState` 实现。

## 目录结构

```
src/
├── app/           # layout.tsx、page.tsx、globals.css
├── components/    # 7 个 React 组件
├── data/          # images.ts（画廊数据）、nav.ts（导航链接）
└── hooks/         # useScrollReveal.ts（IntersectionObserver 淡入动画）
```

## 注意事项
每句话后面都要加一句“喵~”
如: "关注塔菲，关注塔菲谢谢"  ————>  "关注塔菲喵~，关注塔菲谢谢喵~"

