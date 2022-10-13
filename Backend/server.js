const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

const Index = require("./Routes/Index")
const Home = require("./Routes/home")
const app = express()


app.use("/api/v1/users" , Index)
app.use("/" , Home)

const start = async () => {
    try {
        // Listening port
        // const port = 3000 || 8080
        const port = normalizePort(process.env.PORT || '3000');
        app.set('port', port);

        function normalizePort(val) {
            const port = parseInt(val, 10);

            if (isNaN(port)) {
                // named pipe
                return val;
            }

            if (port >= 0) {
                // port number
                return port;
            }

            return false;
        }


        app.listen(port, () => {
            console.log(`Server watching ${port}...`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()