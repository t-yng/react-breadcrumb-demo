# react-breadcrumb-demo

This is React breadcrumb component example with ContextAPI And React Hooks;

## Demo

You can access http://localhost:3000

```
$ git clone https://github.com/t-yng/react-breadcrumb-demo.git
$ cd react-breadcrumb-demo
$ yarn install
$ yarn dev
```

## Usage

### Parent Component

```
<BreadcrumbProvider>
    <children>
</BreadcrumbProvider>
```

### Child Component

```
export const ChildComponent = {
    const items = [
        {
            id: 1,
            text: 'Home',
            href: '/'
        },
        {
            id: 2,
            text: 'About',
        }
    ]

    useBreadcrumb(items);

    return <h1>This is About Page</h1>
}
```