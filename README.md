# TOP-todo

This is a todo app that utilizes local storage as our persistent storage. The goal of this project is to combine everything I've learned up til now.

## Deliverables

- Homepage contains different lists
- Each list contains todos
- Todos include title, notes, date, priority
- User can check or delete todos

## Thoughts on how to build

- Use brower's `localStorage` to store lists and its todos
- When creating a new list
    - Store in localStorage
    - Update display
- When creating a new todo
    - Get list id
    - Create todo and add to list in local storage
    - Update display
- Editing list
    - Get list id
    - Update list in localStorage
    - Update display

## Getting comfy with webpack

I'm getting comfortable with webpack as I work with it more. The following are the questions I had when I first started using webpack:

- What is webpack? (On a high level)
    - It's a tool for bundling your files and code, and minifying them for performance efficiency
- Why do we need webpack for modules?
    - While most browsers support ES2015, some browsers don't support it. When using `import` and `export` statements, we can use webpack to help us transpile our code for older browsers
- Why use separate config files?: common, dev, and prod
    - When we are developing, we might not want to minify bundles or optimize assets yet because each time we do so, we need to wait for webpack to bundle things. Using `development` mode allows us to develop our webapp without wasting time and resources
    - The `common` config file allows us to keep track of all the shared configurations between both `development` and `production` mode so that we keep things DRY (don't repeat yourself)
    - We can use the `webpack-merge` utility to combine the `common` config file with the others
- What's the point of `html-webpack-plugin`?
    - This plugin helps us simplify creating HTML files to serve the webpack bundles
    - It will automatically create an HTML file that includes our bundles. This is especially helpful if we use hashing on our filenames such as `contenthash`
- What is cache busting?
    - Browsers can cache files such as your `index.html` or `main.js` files. If you pushed new code but the filenames remain the same, the browser will load the file it cached instead of the updated version
    - Cache busting is a technique to create a unique filename each time you push updated code so that the browser will serve the correct file
- What are loaders?
    - If you decide to use webpack to bundle other files like CSS, SCSS, CSV, etc, you will need to use loaders
    - Loaders help webpack to correctly load those files and bundle them
    - When adding loaders to your config file, make sure you put them in order as they're run in reverse
    - Ex: `["style-loader", "css-loader", "sass-loader"]` will load `sass-loader` first and `style-loader` last. This makes sure that your files are correctly loaded and read by the next loader