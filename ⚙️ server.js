import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// --- Dummy availability endpoint ---
app.post("/api/check-availability", async (req, res) => {
  const { preferred_time, service_type } = req.body;
  const availableTime = "Wednesday at 10 AM";
  res.json({
    success: true,
    available_time: availableTime,
    message: `We have an opening ${availableTime}. Would you like me to book it for you?`
  });
});

// --- Dummy booking endpoint ---
app.post("/api/book", async (req, res) => {
  const { name, address, phone, service_type, time } = req.body;
  res.json({
    success: true,
    message: `Thanks ${name}! You're booked for ${time || "Wednesday at 10 AM"} for ${service_type}.`
  });
});

app.listen(3000, () => console.log("✅ Retell webhook running on port 3000"));
