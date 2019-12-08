# react-breadcrumb-demo

This is React breadcrumb component example with ContextAPI And React Hooks;

## Demo

[![Edit react-breadcrumb-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/t-yng/react-breadcrumb-example/tree/master/?fontsize=14&hidenavigation=1&theme=dark)

## Installation

You can access http://localhost:3000

```bash
$ git clone https://github.com/t-yng/react-breadcrumb-demo.git
$ cd react-breadcrumb-demo
$ yarn install
$ yarn dev
```

## Usage

### Root Component

```tsx
export const RootComponent: FC<{}> = ({ children }) => (
    <BreadcrumbProvider>
        {children}
    </BreadcrumbProvider>
)
```

### Child Component

```tsx
export const ChildComponent = {
    useBreadcrumb([
        {
            id: 1,
            text: 'Home',
            href: '/'
        },
        {
            id: 2,
            text: 'About',
        }
    ]);

    return <h1>This is About Page</h1>
}
```
