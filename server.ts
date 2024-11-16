import express, { Request, Response } from "npm:express@5";
import { App } from "./App.tsx";
import React from "npm:react@18";
import { renderToString } from "npm:react-dom@18/server";

const port: number = Number(Deno.env.get("RUN_PORT")) || 3000;
const app = express();
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  // Create a new instance of the App component
  const appInstance = new App();
  
  // Render the React component instance to a string
  const html = renderToString(appInstance.render());
  
  // Send a complete HTML document
  return res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Deno React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "healthy" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
