# GitHub Pages 个人主页模板

这是一个无需框架、无需服务器即可使用的单页个人主页，包含：

- 个人简介与核心数据
- 教育 / 工作 / 项目管理履历
- 奖项与荣誉
- 图文项目卡片
- 技能标签与联系方式
- 移动端适配、深色模式、滚动动画

## 一、修改个人信息

主要编辑 `index.html`，搜索并替换这些占位内容：

- `你的姓名` / `YOUR NAME`
- `your-username`
- `name@example.com`
- 学校、机构、城市和时间
- 项目名称、职责、结果和链接
- 奖项名称、年份和证明链接

个人照片替换方法：

1. 把照片放入 `assets/images/`，例如 `profile.jpg`。
2. 将 `index.html` 中：

```html
<img src="assets/images/profile-placeholder.svg" ...>
```

改成：

```html
<img src="assets/images/profile.jpg" alt="你的姓名的个人照片">
```

项目配图也可用同样方式替换。建议图片使用 JPG、PNG 或 WebP，并尽量压缩到 500 KB 以下。

## 二、部署到 GitHub Pages

### 方法 A：直接在 GitHub 网页上传

1. 注册并登录 GitHub。
2. 新建仓库，仓库名必须为：`你的用户名.github.io`。
3. 将本模板中的所有文件上传到仓库根目录。
4. 打开仓库 `Settings` → `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，Folder 选择 `/(root)`，点击 `Save`。
7. 发布后访问：`https://你的用户名.github.io/`。

### 方法 B：使用 Git 命令

```bash
git init
git add .
git commit -m "Create personal homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

然后按方法 A 的第 4—6 步开启 GitHub Pages。

## 三、本地预览

在模板目录执行：

```bash
python -m http.server 8000
```

浏览器打开 `http://localhost:8000`。

也可以直接双击 `index.html`，但本地服务器更接近正式部署效果。

## 四、加入简历 PDF

将 PDF 放到 `assets/`，例如 `assets/cv.pdf`，再在首页合适位置加入：

```html
<a class="button secondary" href="assets/cv.pdf" target="_blank">下载完整简历</a>
```

上传公开主页前，请删除身份证号、家庭住址、私人手机号等敏感信息。

## 五、自定义域名

购买域名后，可在 GitHub 仓库 `Settings` → `Pages` → `Custom domain` 中填写域名，并在域名服务商处配置 DNS。完成后启用 `Enforce HTTPS`。

## 文件结构

```text
personal-homepage-starter/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    └── images/
        ├── profile-placeholder.svg
        ├── project-planning.svg
        ├── project-robot.svg
        ├── project-dashboard.svg
        ├── award-medal.svg
        ├── award-star.svg
        ├── award-certificate.svg
        └── favicon.svg
```
