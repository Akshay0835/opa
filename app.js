const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

async function checkAccess(user) {
    const responce = await axios.post('http://localhost:8181/v1/data/auth/allow', {
        input: { user }
    });
    return responce.data.result;
}
app.get("/", (req, res) => {
    res.send("API is running");
});
app.post("/secure", async (req, res) => {
    try {
        const user = req.body.user;
        const allowed = await checkAccess(user);

        if (allowed) {
            return res.json({ message: "Access granted to secure data" });
        }
        else {
            return res.status(403).json({ message: "Access denied" });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
});