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

## Usage

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
