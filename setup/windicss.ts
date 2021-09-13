// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
    theme: {
        extend: {
            // fonts can be replaced here, remember to update the web font links in `index.html`
            // note that it does not actually seem to be needed to update the index.html file!
            fontFamily: {
                sans: '"IBM Plex Sans","Nunito Sans",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                mono: '"IBM Plex Mono", monospace',
            },
        },
    },
}))