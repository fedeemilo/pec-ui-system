import { configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import centered from "@storybook/addon-centered/react"
import '../src/assets/css/custom.css'

addDecorator(withInfo)
addDecorator(centered)
// automatically import all files ending in *.stories.tsx
configure(require.context("../stories", true, /\.story\.tsx$/), module)

