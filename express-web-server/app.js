const express = require("express");
const app = express();
const port = 3000;

// routing halaman index
app.get("/", (req, res) => {
    // res.send("Hello World!");
    // res.json({
    //     nama: "Wahyu Dwi Kurniawan",
    //     email: "cheatorep123@gmail.com",
    //     noHP: "081358044986",
    // });
    res.sendFile("./index.html", { root: __dirname });
});

// routing ke halaman about
app.get("/about", (req, res) => {
    // res.send("ini adalah halaman About");
    res.sendFile("./about.html", { root: __dirname });
});

// routing ke halaman contact
app.get("/contact", (req, res) => {
    // res.send("ini adalah halaman contact");
    res.sendFile("./contact.html", { root: __dirname });
});

// routing ke halaman data yang berisi file JSON
app.get("/data", (req, res) => {
    res.sendFile("./data.json", { root: __dirname });
});

// melakukan get request and request
app.get("/product/:id", (req, res) => {
    res.send(
        `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
    );
});

// menangkap inputan link apabila halaman tidak ada maka akan di alihkan ke halaman berikut
app.use("/", (req, res) => {
    res.status(404);
    res.send("Test");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
