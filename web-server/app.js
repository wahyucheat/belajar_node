const http = require("http");
const fs = require("fs");
const port = 3000;

//function untuk melakukan routing
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Error : file not found");
        } else {
            res.write(data);
        }
        res.end();
    });
};

// membuat response server
http.createServer((req, res) => {
    //mengubah tipe konten yg di panggil
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    // merequest link halaman yang di masukkan
    const url = req.url;

    // routing menggunakan switch
    switch (url) {
        case "/about":
            renderHTML("./about.html", res);
            break;
        case "/contact":
            renderHTML("./contact.html", res);
            break;
        default:
            renderHTML("./index.html", res);
            break;
    }

    // routing menggunakan if
    // if (url === "/about") {
    //     renderHTML("./about.html", res);
    // } else if (url === "/contact") {
    //     renderHTML("./contact.html", res);
    // } else {
    //     // res.write("hello world");
    //     renderHTML("./index.html", res);
    // }

    //melakukan start server
}).listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});
