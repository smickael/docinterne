---
sidebar_position: 1
---

# Markdown Features

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](../tutorial-basics/create-a-page).
```

```md
Let's see how to [Create a page](../tutorial-basics/create-a-page.md).
```

**Result:** Let's see how to [Create a page](../tutorial-basics/create-a-page.md).

## Images

Regular Markdown images are supported.

Add an image at `static/img/logo-w6d.png` and display it in Markdown:

```md
![Wildcard logo](/img/logo-w6d.png)
```

![Wildcard logo](/img/logo-w6d.png)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/Title.js"
    function Title() {
        return (
            <h1>Hello, Tigers!</h1>
        )
    }
    ```

```jsx title="src/components/Title.js"
function Title() {
  return <h1>Hello, Tigers!</h1>;
}
```

## Advises & Warnings


    :::tip Tip

    Use this awesome feature option

    :::

    :::danger Attention

    This action is dangerous

    :::

:::tip Tip

Use this awesome feature option

:::

:::danger Attention

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Green</Highlight> !

This is <Highlight color="#1877F2">Blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Green</Highlight> !

This is <Highlight color="#1877F2">Blue</Highlight> !
