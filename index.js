const express = require("express");
const axios = require("axios")
const app = express();
const PORT = 3000;

const user = {
    email: 'ruthambogo.ra@gmail.com', 
    name: 'Musungu Ruth Ambogo', 
    stack: 'Backend ', 
   };

app.get("/me", async (req, res) => {
  try {
    // Fetch a random cat fact
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact;

    // Generate current UTC timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    // Build the JSON response
    const result = {
      status: "success",
      user,
      timestamp,
      fact: catFact,
    };

    // Send JSON response
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Handle potential API failure gracefully
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      timestamp: new Date().toISOString(),
    });
  }
});


app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));