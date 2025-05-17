# MG Modal

A simple React modal component.

## Requirements

- **Node.js version:** `>=16.x`
- **Package manager:** [npm](https://www.npmjs.com/)
- **Recommended editor:** [Visual Studio Code](https://code.visualstudio.com/)




## Installation

```bash
npm install mg_modal
```

## Usage

```jsx
import React, { useState } from 'react';
import MgModal from 'mg_modal';

const App() => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      
      <MgModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        title="My Modal"
        body="This is my modal content."
      />
    </div>
  );
}
```

## Props

| Prop | type | Description |
|------|-----|-----------|
| `isOpen` | boolean| Controls modal visibility |
| `setIsOpen` |function| State setter function to update visibility |
| `title` | string|Modal title (optional) |
| `body` |string| Modal content |

## Development

To clone the component locally

```bash
# Clone the repository
git clone https://github.com/manelgasmi/mg_modal.git

```


## License

MIT