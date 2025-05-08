# MG Modal

A simple React modal component.

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

| Prop | Description |
|------|-------------|
| `isOpen` | Controls modal visibility |
| `setIsOpen` | State setter function to update visibility |
| `title` | Modal title (optional) |
| `body` | Modal content |

## License

MIT