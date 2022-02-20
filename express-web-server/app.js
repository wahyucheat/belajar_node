const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send("Hello World!");
    // res.json({
    //     nama: "Wahyu Dwi Kurniawan",
    //     email: "cheatorep123@gmail.com",
    //     noHP: "081358044986",
    // });
    res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
    // res.send("ini adalah halaman About");
    res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
    // res.send("ini adalah halaman contact");
    res.sendFile("./contact.html", { root: __dirname });
});

app.get("/data", (req, res) => {
    res.sendFile("./data.json", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
    res.send(
        `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
    );
});

app.use("/", (req, res) => {
    res.status(404);
    res.send("Test");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// //function untuk melakukan routing
// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write("Error : file not found");
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// };

// // membuat response server
// http.createServer((req, res) => {
//     //mengubah tipe konten yg di panggil
//     res.writeHead(200, {
//         "Content-Type": "text/html",
//     });

//     // merequest link halaman yang di masukkan
//     const url = req.url;

//     // routing menggunakan switch
//     switch (url) {
//         case "/about":
//             renderHTML("./about.html", res);
//             break;
//         case "/contact":
//             renderHTML("./contact.html", res);
//             break;
//         default:
//             renderHTML("./index.html", res);
//             break;
//     }

//     // routing menggunakan if
//     // if (url === "/about") {
//     //     renderHTML("./about.html", res);
//     // } else if (url === "/contact") {
//     //     renderHTML("./contact.html", res);
//     // } else {
//     //     // res.write("hello world");
//     //     renderHTML("./index.html", res);
//     // }

//     //melakukan start server
// }).listen(port, () => {
//     console.log(`server is listening on port ${port}...`);
// });
