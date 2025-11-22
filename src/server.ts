// Dynamically import the app to ensure correct resolution under ts-node ESM
const { default: app } = await import("./app.ts");

// Load port from environment or default
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export {};