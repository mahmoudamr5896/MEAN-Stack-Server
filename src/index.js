const app = require("./app");
require("./database");
const { PORT } = require("./config");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });console.log("Server listening on port", PORT);
