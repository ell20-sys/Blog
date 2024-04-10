import  { useState } from 'react';

function App() {
  // Initialize the state with false, meaning the element is initially hidden
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the value of isVisible
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <div>This element is visible!</div>}
    </div>
  );
}

export default App;
