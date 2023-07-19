[![Netlify Status](https://api.netlify.com/api/v1/badges/2629c471-c6e5-4865-8724-da01a53acabc/deploy-status)](https://app.netlify.com/sites/gilded-pasca-cbbf5b/deploys)

# Toast Notification

[View demo](https://gilded-pasca-cbbf5b.netlify.app/).

## Usage

```jsx
import { ToastsProvider, useAddToast } from "./toast";

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
