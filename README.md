Vite

# Init project

    - npm init vite@latest my-app --template=react-ts

# Init git

# Copy gitignore

# Add vscode/settings.json

# Add formatting

    ## prettier
        - npm i -D prettier
        - add .prettierrc and .prettierignore files
        - add to package.json > "format": "prettier . --write"
        - npm run format

# Add supported browser

    - .browserslistrc

# Add js linting

    ## eslint
        - npm i -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-compat
        - .eslintrc.js and .eslintignore files
        - add to package.json > "lint:js": "eslint ."
        - run it

# Add css linting

    ## stylelint for css
      - npm i -D stylelint  stylelint-config-prettier  stylelint-config-standard stylelint-no-unsupported-browser-features postcss autoprefixer
      - add .stylelintrc .stylelintignore postcss.config.js files
      // TODO fix on save

    ## stylelint for scss
      - Do above steps
      - npm i -D stylelint-config-standard-scss sass
      - add "stylelint-config-standard-scss" to extends
      - change command to "lint:css": "stylelint '**/*.{css,scss}' --fix"

# If vanilla-extract instead of plain css or scss

    ##

# Add testing

    ## e2e
      - add cypress
    ## jest
      - npm i -D jest @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest babel-jest identity-obj-proxy jest

# Add ci/cd

    1. husky
