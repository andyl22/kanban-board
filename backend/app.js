var createError = require("http-errors");
var express = require("express");
var path = require("path");
var passport = require("passport");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sassMiddleware = require("node-sass-middleware");
var mongoose = require("mongoose");
const passportConfig = require("./config/passportAuthenticate");

require("dotenv").config();
var port = process.env.PORT || 5000;

var mongoDB =
  "mongodb+srv://andylau:Rapidcar32@cluster0.hoizu.mongodb.net/kanbanDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var projectsRouter = require("./routes/projects");
var projectSectionRouter = require("./routes/projectSection");
var sectionItemRouter = require("./routes/sectionItem");

var app = express();
app.set("port", process.env.PORT);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  })
);

// 

if (process.env.NODE_ENV === "production") {
  console.log("Production");
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join((__dirname = "../frontend/build/index.html")));
  });
} else {
  console.log("Dev");
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/", indexRouter);
}

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/projectSection", projectSectionRouter);
app.use("/api/sectionItem", sectionItemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

console.log(process.env.PORT, process.env.SECRET);

module.exports = app;
