[![Netlify Status](https://api.netlify.com/api/v1/badges/2629c471-c6e5-4865-8724-da01a53acabc/deploy-status)](https://app.netlify.com/sites/gilded-pasca-cbbf5b/deploys)

# Toast Notification

[View demo](https://gilded-pasca-cbbf5b.netlify.app/).

## Installation

Create a `/packages` directory in your project.

Copy the `/toast` directory into your `/packages` directory.

In your root `package.json`, add the path to your `/packages` directory:

```json
{
  "private": true,
  "workspaces": [
    "packages/**"
  ]
}
```

Run `npm i` in your root directory to install the dependencies.

## Basic usage

```jsx
// You can import like this if you installed it as a package as explained above.
import { ToastsProvider, useAddToast } from "toast-notification";

function App() {
    return (
        <ToastsProvider>
            <Main />
        </ToastsProvider>
    )
}

function Main() {
    const addToast = useAddToast();

    // Generate a toast somehow, eg, the result of an API call.
    const toast = {
        intent: "Success",
        message: "We are the champions",
    }

    // Display the toast.
    addToast({toast})

    return (
        <div>Fancy component here</div>
    )
}

render(<App />, document.getElementById('root'))
```

## API

The `toast` parameter of `addToast()` has the following options:

```typescript
type Options = {
    /**
     * Style of the toast.  Chose between "Danger", "Success", and "Warning".
     */
    intent: Intent;

    /**
     * Message to display in the toast.
     */
    message: string;

    /**
     * Title to display on the toast.
     * Optional.
     * Limited to 50 characters.
     * Defaults to the intent string.
     */
    title?: string;

    /**
     * Duration to display the toast in milliseconds.
     * Optional.
     * Defaults to 6000.
     */
    autoCloseDuration?: number;
};
```
