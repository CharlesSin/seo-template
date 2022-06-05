const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const posts = {
  head: {
    title: "Food Website",
    external_css: [
      {
        link: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
      },
    ],
    internal_css: [
      {
        link: "./foodwebsite/style.css",
      },
    ],
    meta: {
      description: "This is simple food website",
      keywords: "food, charles-food, pure-html, seo-template, ",
      image: "",
      url: "",
    },
  },
  body: `
    <!-- header section starts -->
    <header><a href="#" class="logo"><i class="fas fa-utensils"></i>food</a><div id="menu-bar" class="fas fa-bars"></div>
      <nav class="navbar"><a href="#home">home</a><a href="#speciality">speciality</a><a href="#popular">popular</a><a href="#gallery">gallery</a><a href="#review">review</a><a href="#order">order</a></nav>
    </header>
    <!-- header section ends -->
    <!-- home section starts  -->
    <section class="home" id="home">
        <div class="content"><h3>food made with love</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p><a href="#" class="btn">order now</a></div><div class="image"><img src="images/home-img.png" alt=""></div>
    </section>
    <!-- home section ends -->
    <!-- speciality section starts  -->
    <section class="speciality" id="speciality">
        <h1 class="heading"> our <span>speciality</span></h1><div class="box-container"><div class="box"><img class="image" src="images/s-img-1.jpg" alt=""><div class="content"><img src="images/s-1.png" alt=""><h3>tasty burger</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div><div class="box"><img class="image" src="images/s-img-2.jpg" alt=""><div class="content"><img src="images/s-2.png" alt=""><h3>tasty pizza</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div><div class="box"><img class="image" src="images/s-img-3.jpg" alt=""><div class="content"><img src="images/s-3.png" alt=""><h3>cold ice-cream</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div><div class="box"><img class="image" src="images/s-img-4.jpg" alt=""><div class="content"><img src="images/s-4.png" alt=""><h3>cold drinks</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div><div class="box"><img class="image" src="images/s-img-5.jpg" alt=""><div class="content"><img src="images/s-5.png" alt=""><h3>tasty sweets</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div><div class="box"><img class="image" src="images/s-img-6.jpg" alt=""><div class="content"><img src="images/s-6.png" alt=""><h3>healty breakfast</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p></div></div></div>
    </section>
    <!-- speciality section ends -->
    <!-- popular section starts  -->
    <section class="popular" id="popular">
        <h1 class="heading"> most <span>popular</span> foods </h1><div class="box-container"><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-1.jpg" alt=""><h3>tasty burger</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-2.jpg" alt=""><h3>tasty cakes</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-3.jpg" alt=""><h3>tasty sweets</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-4.jpg" alt=""><h3>tasty cupcakes</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-5.jpg" alt=""><h3>cold drinks</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div><div class="box"><span class="price"> $5 - $20 </span><img src="images/p-6.jpg" alt=""><h3>cold ice-cream</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><a href="#" class="btn">order now</a></div></div>
    </section>
    <!-- popular section ends -->
    <!-- steps section starts  -->
    <div class="step-container">
        <h1 class="heading">how it <span>works</span></h1><section class="steps"><div class="box"><img src="images/step-1.jpg" alt=""><h3>choose your favorite food</h3></div><div class="box"><img src="images/step-2.jpg" alt=""><h3>free and fast delivery</h3></div><div class="box"><img src="images/step-3.jpg" alt=""><h3>easy payments methods</h3></div><div class="box"><img src="images/step-4.jpg" alt=""><h3>and finally, enjoy your food</h3></div></section>
    </div>
    <!-- steps section ends -->
    <!-- gallery section starts  -->
    <section class="gallery" id="gallery">
        <h1 class="heading"> our food <span> gallery </span> </h1><div class="box-container"><div class="box"><img src="images/g-1.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-2.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-3.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-4.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-5.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-6.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-7.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-8.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div><div class="box"><img src="images/g-9.jpg" alt=""><div class="content"><h3>tasty food</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p><a href="#" class="btn">ordern now</a></div></div></div>    
    </section>
    <!-- gallery section ends -->
    <!-- review section starts  -->
    <section class="review" id="review">
        <h1 class="heading"> our customers <span>reviews</span> </h1><div class="box-container"><div class="box"><img src="images/pic1.png" alt=""><h3>john deo</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p></div><div class="box"><img src="images/pic2.png" alt=""><h3>john deo</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p></div><div class="box"><img src="images/pic3.png" alt=""><h3>john deo</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p></div></div>    </section>
    <!-- review section ends -->
    <!-- order section starts  -->
    <section class="order" id="order"><h1 class="heading"> <span>order</span> now </h1><div class="row"><div class="image"><img src="images/order-img.jpg" alt=""></div><form action=""><div class="inputBox"><input type="text" placeholder="name"><input type="email" placeholder="email"></div><div class="inputBox"><input type="number" placeholder="number"><input type="text" placeholder="food name"></div><textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea><input type="submit" value="order now" class="btn"></form></div></section>
    <!-- order section ends -->
    <!-- footer section  -->
    <section class="footer"><div class="share"><a href="#" class="btn">facebook</a><a href="#" class="btn">twitter</a><a href="#" class="btn">instagram</a><a href="#" class="btn">pinterest</a><a href="#" class="btn">linkedin</a></div><h1 class="credit"> created by <span> charles </span> | all rights reserved! </h1></section>
    <!-- scroll top button  -->
    <a href="#home" class="fas fa-angle-up" id="scroll-top"></a>
    <!-- loader  -->
    <div class="loader-container"><img src="images/loader.gif" alt=""></div>`,
  footer: {
    external_script: [],
    internal_script: [
      {
        link: "./foodwebsite/script.js",
      },
    ],
  },
};

app.get("/template", (req, res) => {
  res.render("template", {
    articles: posts,
    headtag: posts.head,
    foottag: posts.footer,
  });
});

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

module.exports = app;
