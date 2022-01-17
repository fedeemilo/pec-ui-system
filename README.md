# PEC UI system

## Styled Components + Tailwind + Storybook

### Initial Commands

- mkdir pec-ui-system

- cd -pec-ui-system

- yarn init -y

- yarn add -D react @types/react typescript

### Setup tsconfig.json

- yarn tsc --init

- in tsconfig file uncomment the following:

```json
"target": "es6",        // change to es6 instead
"lib": ["dom"],
"jsx": "react",         // change it to react instead
"declaration": true,               
"declarationMap": true,
"outDir": "./dist",     // name a distribution folder 
"rootDirs": ["src", "stories"],   
// in case your stories will be placed inside src, than just use 
"rootDir": "src", instead.
"moduleResolution": "node",
```

- add an src folder to the root of the project

## Setup Tailwind

- yarn add -D tailwindcss tailwind.macro@next @types/styled-components postcss-cli autoprefixer postcss-import

- yarn add styled-components

- Initialize tailwind config => npx tailwind init

- Create tailwind.css in .src/assets/css to add the base Tailwind variables, that call the utilities from Tailwinds package

- tailwind.css 

```javascript
@tailwind base;

@tailwind components; // in case you need the components

@tailwind utilities;
```

- On the root directory, add a new file called postcss.config.js with following code.
Tailwind will be processed with postcss, and autoprefixerwill parse the CSS and add vendor prefixes for browser support. :

```javascript
module.exports = {
plugins: [ 
    require('postcss-import'),
    require("tailwindcss"),
    require("autoprefixer")
 ]
};
```

- Add the following to package.json:

```json
"scripts": {
  "build:css": "postcss src/assets/css/tailwind.css -o src/assets/css/main.css",
  "watch:css": "postcss src/assets/css/tailwind.css -o src/assets/css/main.css -w",
  "storybook": "start-storybook -p 8080"
}
```

- Run this command on the terminal so the tailwind file will be generated => yarn build:css

- Place the generated tailwind file in index.tsx on root

```javascript
// index.tsx or App.tsx
import './assets/css/tailwind.css';
```

### Storybook Setup

- yarn add -D @storybook/react react-docgen-typescript-loader @babel/core babel-loader babel-preset-react-app @storybook/addon-info @storybook/addon-centered 

- create a new folder at the root called .storybook and create a main.js file inside

- .storybook/main.js

```javascript
const path = require('path');
module.exports = {
 webpackFinal: async config => {
  config.module.rules = [
   ...config.module.rules,
   {
    test: /\.(ts|tsx)$/,
    include: [path.resolve(__dirname, '..')],
    use: [
     {
      loader: require.resolve("babel-loader"),
      options: {
       presets: [require.resolve("babel-preset-react-app")]
      }
     },
     require.resolve("react-docgen-typescript-loader")
    ]
   }
  ],
config.resolve.extensions.push('.ts', '.tsx');
  return config;
 },
};
```

- Now add a second file to the same folder name config.js.
In this config file you could add the addons such as addon-info, to your storybook, more references [here](https://storybook.js.org/addons)

```javascript
//config.js
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
addDecorator(withInfo);
addDecorator(centered);
// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.story\.tsx$/), module);
```

### Create a Story

- We need to have at least one component written in our .src/components folder, and one story added to our ./stories folder

- Let's then assume we have a Button component sample in our ./src/components/Button/index.tsx and a Button Style in ./src/components/Button/styles.tslike this:

```javascript
//./src/components/Button/index.tsx
import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <Container type='button' {...rest}>
     {label}
    </Container>
  );
};
```

```javascript
//./src/components/Button/styles.ts
import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';
export const Container = styled.button`
  ${tw`text-white text-base font-bold text-center bg-indigo-700 rounded-full flex py-4 px-10 focus:outline-none cursor-pointer`}
  &:disabled {
    ${tw`opacity-75 cursor-not-allowed`}
  }
  &:hover:not(:disabled) {
    ${tw`g-indigo-800 border-transparent shadow-xs`}
  }
  &:active:not(:disabled) {
    ${tw`g-indigo-900 border-transparent shadow-xs`}
  }
`;
```

- Now go to ./src/index.tsx and export the Button component

```javascript
export { Button } from './components/Button';
```

- To use tailwind.macro and extend the powerful capabilities of using Tailwind in the project by adding the 'tw' tagged template literal we need to, in the root,  create a folder named types and inside this folder, create another folder named tailwind.macro

- Inside this folder create a file named index.d.ts with the following code:

```javascript
declare module 'tailwind.macro' {
  export default function tw(string: TemplateStringsArray): string;
}
```

> **_NOTE:_** In the main.js file in our .storybook folder, we already have a babel-loader instead of the ts-loader, because of tailwind.macro.

- Create a stories folder at the root directory

```javascript
//.stories/Button.story.tsx
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";
storiesOf("Button", module).add("Default", () => <Button label="Continue" />);
```

- yarn storybook