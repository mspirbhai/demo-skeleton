
export const myCustomTheme = {
    name: 'kipimo-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-family-heading": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "255 255 255",
        "--on-error": "0 0 0",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #8e44ad 
        "--color-primary-50": "238 227 243", // #eee3f3
        "--color-primary-100": "232 218 239", // #e8daef
        "--color-primary-200": "227 208 235", // #e3d0eb
        "--color-primary-300": "210 180 222", // #d2b4de
        "--color-primary-400": "176 124 198", // #b07cc6
        "--color-primary-500": "142 68 173", // #8e44ad
        "--color-primary-600": "128 61 156", // #803d9c
        "--color-primary-700": "107 51 130", // #6b3382
        "--color-primary-800": "85 41 104", // #552968
        "--color-primary-900": "70 33 85", // #462155
        // secondary | #9575cd 
        "--color-secondary-50": "239 234 248", // #efeaf8
        "--color-secondary-100": "234 227 245", // #eae3f5
        "--color-secondary-200": "229 221 243", // #e5ddf3
        "--color-secondary-300": "213 200 235", // #d5c8eb
        "--color-secondary-400": "181 158 220", // #b59edc
        "--color-secondary-500": "149 117 205", // #9575cd
        "--color-secondary-600": "134 105 185", // #8669b9
        "--color-secondary-700": "112 88 154", // #70589a
        "--color-secondary-800": "89 70 123", // #59467b
        "--color-secondary-900": "73 57 100", // #493964
        // tertiary | #9ccc65 
        "--color-tertiary-50": "240 247 232", // #f0f7e8
        "--color-tertiary-100": "235 245 224", // #ebf5e0
        "--color-tertiary-200": "230 242 217", // #e6f2d9
        "--color-tertiary-300": "215 235 193", // #d7ebc1
        "--color-tertiary-400": "186 219 147", // #badb93
        "--color-tertiary-500": "156 204 101", // #9ccc65
        "--color-tertiary-600": "140 184 91", // #8cb85b
        "--color-tertiary-700": "117 153 76", // #75994c
        "--color-tertiary-800": "94 122 61", // #5e7a3d
        "--color-tertiary-900": "76 100 49", // #4c6431
        // success | #66bb6a 
        "--color-success-50": "232 245 233", // #e8f5e9
        "--color-success-100": "224 241 225", // #e0f1e1
        "--color-success-200": "217 238 218", // #d9eeda
        "--color-success-300": "194 228 195", // #c2e4c3
        "--color-success-400": "148 207 151", // #94cf97
        "--color-success-500": "102 187 106", // #66bb6a
        "--color-success-600": "92 168 95", // #5ca85f
        "--color-success-700": "77 140 80", // #4d8c50
        "--color-success-800": "61 112 64", // #3d7040
        "--color-success-900": "50 92 52", // #325c34
        // warning | #183446 
        "--color-warning-50": "220 225 227", // #dce1e3
        "--color-warning-100": "209 214 218", // #d1d6da
        "--color-warning-200": "197 204 209", // #c5ccd1
        "--color-warning-300": "163 174 181", // #a3aeb5
        "--color-warning-400": "93 113 126", // #5d717e
        "--color-warning-500": "24 52 70", // #183446
        "--color-warning-600": "22 47 63", // #162f3f
        "--color-warning-700": "18 39 53", // #122735
        "--color-warning-800": "14 31 42", // #0e1f2a
        "--color-warning-900": "12 25 34", // #0c1922
        // error | #cf6679 
        "--color-error-50": "248 232 235", // #f8e8eb
        "--color-error-100": "245 224 228", // #f5e0e4
        "--color-error-200": "243 217 222", // #f3d9de
        "--color-error-300": "236 194 201", // #ecc2c9
        "--color-error-400": "221 148 161", // #dd94a1
        "--color-error-500": "207 102 121", // #cf6679
        "--color-error-600": "186 92 109", // #ba5c6d
        "--color-error-700": "155 77 91", // #9b4d5b
        "--color-error-800": "124 61 73", // #7c3d49
        "--color-error-900": "101 50 59", // #65323b
        // surface | #D1B3DF 
        "--color-surface-50": "248 244 250", // #f8f4fa
        "--color-surface-100": "246 240 249", // #f6f0f9
        "--color-surface-200": "244 236 247", // #f4ecf7
        "--color-surface-300": "237 225 242", // #ede1f2
        "--color-surface-400": "223 202 233", // #dfcae9
        "--color-surface-500": "209 179 223", // #D1B3DF
        "--color-surface-600": "188 161 201", // #bca1c9
        "--color-surface-700": "157 134 167", // #9d86a7
        "--color-surface-800": "125 107 134", // #7d6b86
        "--color-surface-900": "102 88 109", // #66586d

    }
}