import { app, port } from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/employees.js";
import "./models/services.js";
import "./models/reviews.js";
import "./models/bookings.js";
import "./models/clients.js";

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Connected to database");
    app.listen(port);
    console.log(`server running in port http://localhost:${port}/`);
  } catch (err) {
    console.log(err);
  }
};

main();
