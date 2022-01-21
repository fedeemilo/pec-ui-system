import { configure, addDecorator, addParameters } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import centered from "@storybook/addon-centered/react"
import '../src/assets/css/custom.css'

addDecorator(withInfo)
addDecorator(centered)
// automatically import all files ending in *.stories.tsx
configure(require.context("../stories", true, /\.story\.tsx$/), module)

addParameters({
    backgrounds: [
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
        { name: "dark", value: "#505959", default: true }
    ]
});