 const express = require('express');
const app = express();
const PORT = 3000;

// Serve files from "public" folder
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  function toggleOptions(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'flex' ? 'none' : 'flex';
}

});

