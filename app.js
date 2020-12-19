var       express                      =           require("express"),
          bodyParser                   =           require("body-parser"),
          app                          =           express(),
          methodOverride               =           require("method-override"),         
          x                            =           "",
          mongoose= require("mongoose"),
          passport=require("passport"),
         localStrategy= require("passport-local"),
         passportLocalMongoose=require("passport-local-mongoose"),
         ConnectDB = require("./models/mongo");

 app.use(express.static("public"))         
 app.use(methodOverride("_method"))
 app.use(bodyParser.urlencoded({extended:true}))   
 mongoose.connect("mongodb+srv://infinitysworst:ganda@cluster0.d7vbn.mongodb.net/<dbname>?retryWrites=true&w=majority")
 ConnectDB()
 var userSchema= new mongoose.Schema({
  username: String, 
  password: String
})
userSchema.plugin(passportLocalMongoose)
var User=mongoose.model("User", userSchema)

//dgdfgdfg

app.use(passport.initialize())
app.use(passport.session())
app.use(require("express-session")({
    secret: "madharchod",
    resave: false,
    saveUninitialized: false
}))
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


//ssdsdfs

//home
app.get("/", function(req, res){
   res.render("explore.ejs")
})
app.get("/home", function(req, res){
  res.render("index.ejs")
})

//course
app.get("/course", function(req,res){
    res.render("course.ejs")
})
//death
app.get("/death", function(req,res){
  res.render("death.ejs")
})
//contact
app.get("/contact", function(req,res){
    res.render("contact.ejs")
})

//explore
app.get("/explore" ,function(req, res){
    res.render("explore.ejs")
})
//exploremorephotoshop
app.get("/explore/photoshop/:photo", function(req, res){
  var photo=req.params.photo,
       file1="STEPS IN MAKING",
       file2="IMAGES-USED FOR MAKING",
       file3="FINAL IMAGE",
       img1 ="/images/photoshop/ps1.jpg",
       img2 ="/images/photoshop/ps2.jpg",
       img3 ="/images/photoshop/ps3.jpg",
       img4 ="/images/photoshop/ps4.jpg",
       img5 ="/images/photoshop/ps5.jpg",
       img6 ="/images/photoshop/ps6.jpg",
       img7 ="/images/photoshop/ps7.jpg",
       img8 ="/images/photoshop/ps8.jpg",
       url1 ="/explore/photoshop/img1",
       url2 ="/explore/photoshop/img2",
       url3 ="/explore/photoshop/img3",
       url4 ="/explore/photoshop/img4",
       url5 ="/explore/photoshop/img5",
       url6 ="/explore/photoshop/img6",
       url7 ="/explore/photoshop/img7",
       url8 ="/explore/photoshop/img8",
       y=2,
       a=1,
       b=1
      
     if (photo == "img1") {
         var doc1="https://drive.google.com/file/d/1qIPeH56Zgc3Ae-T-sWhOCaIvu6WHhhwl/view?usp=sharing",
             doc2="https://drive.google.com/drive/folders/1xorrZvJ7PXyWAWvZ_jvXEc9FmGdfDNVR?usp=sharing",
             img ="/images/photoshop/ps1.jpg",
             doc3="https://drive.google.com/file/d/1A1DgOy7fBdV9qXTgsrvtZ8z-OkdgVV9U/view?usp=sharing",
             name="Annilitation"

      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     }
     else if (photo == "img2") {
        var doc1="https://drive.google.com/file/d/1QkBOqni6RQV8WNTmSPK1ioGiHe3iQXV9/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1xorrZvJ7PXyWAWvZ_jvXEc9FmGdfDNVR?usp=sharing",
            img ="/images/photoshop/ps2.jpg",
            doc3="https://drive.google.com/file/d/1NXh-R6GDhyakNYnCW5fspKq8ieakRN9i/view?usp=sharing",
            name="Low-Poly Wolf"

            img2=img1
            url2=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
           
    }
    else if (photo == "img3") {
        var doc1="https://drive.google.com/file/d/11FQpgvpiH9ENv8qvqUpQf4ZyJ4eXEY8q/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1e2ksRYA_FvqFdmHUK-LidV_rC8m2SqvW?usp=sharing",
            img ="/images/photoshop/ps3.jpg",
            doc3="https://drive.google.com/file/d/1UilqQgaLUfJYNlRCoXRvojiK_xlCnCpE/view?usp=sharing",
            name="Moon-Love"

            img3=img1
            url3=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img4") {
        var doc1="https://drive.google.com/file/d/1L-D3quWV-ARuw1yAqQ_8B95h2ZtkmTZs/view?usp=sharing",
            doc2=": https://drive.google.com/drive/folders/1t-o1r86u_TpVjlTHltq5-4JAPRznsn-v?usp=sharing",
            img ="/images/photoshop/ps4.jpg",
            doc3="https://drive.google.com/file/d/18vctQ1toXnOWfjRIss5U9gEmDnPNA-2n/view?usp=sharing",
            name="SwordsMan"

            img4=img1
            url4=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
      
    }
    else if (photo == "img5") {
        var doc1="https://drive.google.com/file/d/1KX1nP-mV5ZURMIAhn5O4hA9QOmfbe5LL/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1xn_sk0kLFiWHavbjZyzaCXxx1HNPywR-?usp=sharing",
            img ="/images/photoshop/ps5.jpg",
            doc3="https://drive.google.com/file/d/1m7TUidSgJPXnYmr6KC3uAfvwOU5wKBf2/view?usp=sharing",
            name="Gloomy-Eyes"

            img5=img1
            url5=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img6") {
        var doc1="https://drive.google.com/file/d/1jO2vTG2ICAPgl8UeR3i-cyHAmiDk5LDQ/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1jXpIp2hCpBan4ycMp34bHiZ8iQ83Cb0e?usp=sharing",
            img ="/images/photoshop/ps6.jpg",
            doc3="https://drive.google.com/file/d/18BnpzCnY-MkwiogMCtdqHGjm8ouCwoJK/view?usp=sharing",
            name="Gaming-Level"

            img6=img1
            url6=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img7") {
        var doc1="https://drive.google.com/file/d/1m3z4bnFxAhxFg6-hO_DJpQfJoQZtRumo/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1s-rnklXU7Md5vD3iGmxc8_a9BYHj3mIp/view?usp=sharing",
            img ="/images/photoshop/ps7.jpg",
            doc3="https://drive.google.com/file/d/1cO4nFSNyMcLChX3KNzjUyfidRuru9IFc/view?usp=sharing",
            name="Temple-Sketch"

            img7=img1
            url7=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
      
    }
    else if (photo == "img8") {
        var doc1="https://drive.google.com/file/d/1r0NttzA4n-7TxnYqua5liNkkCKRpHAB8/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1r0NttzA4n-7TxnYqua5liNkkCKRpHAB8/view?usp=sharing",
            img ="/images/photoshop/ps8.jpg",
            doc3="https://drive.google.com/file/d/1HpxBiLwJL1Jj7AMEgN-P6hCHnp9rHQb8/view?usp=sharing",
            name="Potrait"

            img8=img1
            url8=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
      
    }
    else if (photo == "img9") {
        var doc1="",
            doc2="",
            img ="/images/photoshop/ps9.jpg",
            doc3=""
      res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3})
     
    }
   else if(photo == img10){
       
        var doc1="",
            doc2="",
            img ="/images/photoshop/ps10.jpg",
            doc3=""
      res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3})
      
    }
    
})

//exploremoreillustrator
app.get("/explore/illustrator/:photo", function(req, res){
  var photo=req.params.photo,
       file1="STEPS IN MAKING",
       file2="OUTLINE & SKETCHES",
       file3="FINAL ART",
       img1 ="/images/illustrator/ai1.png",
       img2 ="/images/illustrator/ai2.png",
       img3 ="/images/illustrator/ai3.jpg",
       img4 ="/images/illustrator/ai4.png",
       img5 ="/images/illustrator/ai5.png",
       img6 ="/images/illustrator/ai6.png",
       img7 ="/images/illustrator/ai7.jpg",
       img8 ="/images/illustrator/ai8.png",
       url1 ="/explore/illustrator/img1",
       url2 ="/explore/illustrator/img2",
       url3 ="/explore/illustrator/img3",
       url4 ="/explore/illustrator/img4",
       url5 ="/explore/illustrator/img5",
       url6 ="/explore/illustrator/img6",
       url7 ="/explore/illustrator/img7",
       url8 ="/explore/illustrator/img8",
       y=2,
       a=1,
       b=1
      
     if (photo == "img1") {
         var doc1="https://drive.google.com/file/d/1_x-QvraBQKosVpNtnW-myXrwSjQd9SMD/view?usp=sharing",
             doc2="https://drive.google.com/drive/folders/1i8XKl4pNLb5Uysw3jw2J0HzldGJFdIMA?usp=sharing",
             img ="/images/illustrator/ai1.png",
             doc3="https://drive.google.com/file/d/1tzHuoT3X1atMFlWaNlOy9xEqb0NrKpvc/view?usp=sharing",
             name="Panda-Love"

      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     }
     else if (photo == "img2") {
        var doc1="https://drive.google.com/file/d/1qaA-Y4aHYLs7ZhdpKjhV6EVLFoM9dpcP/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1qAHZ_OTjkLIHpvvJ6EK-QXjk-jR7znKF/view?usp=sharing",
            img ="/images/illustrator/ai2.png",
            doc3="https://drive.google.com/file/d/1-D0btxGo-F8gn2w_C6WJ6k87b1p7WoYj/view?usp=sharing",
            name="Mid-Night-Wolf"

            img2=img1
            url2=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
           
    }
    else if (photo == "img3") {
        var doc1="https://drive.google.com/file/d/1iglycC1fA9ADBqRnygz1f-mYvzqgOgrz/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1WUFwfYpVA_Ocp9cJcgJaZ1Mo_SaZSkz5/view?usp=sharing",
            img ="/images/illustrator/ai3.jpg",
            doc3="https://drive.google.com/file/d/12REzqn0wvlVaNnFH082s1wmCtJ5LTGp7/view?usp=sharing",
            name="M-letter-LOGO"

            img3=img1
            url3=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img4") {
        var doc1="https://drive.google.com/file/d/1EK-kLqQxTpVUJzgv8a4OtQK32VS1VPi5/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1DY0wjSknPWpZhovSOW8K-9fu76-pyXqH/view?usp=sharing",
            img ="/images/illustrator/ai4.png",
            doc3="https://drive.google.com/file/d/14QCsVa62ngRsIN6_1dC7UM4dgjkhOK3K/view?usp=sharing",
            name="Jellyfish"

            img4=img1
            url4=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
      
    }
    else if (photo == "img5") {
        var doc1="https://drive.google.com/file/d/1fS1j4MSzc2eXoacMzxZcsiAlI-SN-Qlo/view?usp=sharing",
            doc2="https://drive.google.com/file/d/1E3XEr6gSiIkccY3ikL0zgAx_sD5lCaSB/view?usp=sharing",
            img ="/images/illustrator/ai5.png",
            doc3="https://drive.google.com/file/d/10Qgv54LCNOmgJEDXjcteLmZ2o0ZM0Mrz/view?usp=sharing",
            name="A-letter-LOGO"

            img5=img1
            url5=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img6") {
        var doc1="https://drive.google.com/file/d/1rLcqedxBMzycJqW-PCru5fmJXTawW9Zz/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1-hbtzKAGGk7JzndYp7Jr3LqAGGFKvHLW?usp=sharing",
            img ="/images/illustrator/ai6.png",
            doc3="https://drive.google.com/file/d/1ISDBk3iHffglVBMrLht4y2BMKn2-Lla4/view?usp=sharing",
            name="Panda-Typography"

            img6=img1
            url6=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
    else if (photo == "img7") {
        var doc1="https://drive.google.com/file/d/1Gkwgj3XtJIR5QeigXoX23aT8s06uIuzr/view?usp=sharing",
            doc2="",
            img ="/images/illustrator/ai7.jpg",
            doc3="https://drive.google.com/file/d/1jaCRT2KSahfwqVzDlCsQO70h4F_x1wvC/view?usp=sharing",
            name="Creating-Pattern"

            img7=img1
            url7=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
      
    }
    else if (photo == "img8") {
        var doc1="https://drive.google.com/file/d/1wyxf4Ot8wBU1xK0yVvw5OhZZ7iRXMX6l/view?usp=sharing",
            doc2="https://drive.google.com/file/d/19FQlo0luE-f3yNLdSVMfU8wV3hySUhvy/view?usp=sharing",
            img ="/images/illustrator/ai8.png",
            doc3="https://drive.google.com/file/d/1KX0R3bFJ9HdzALa-LKOF3a--N3hqq36-/view?usp=sharing"
            img8=img1
            url8=url1
      res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
      
    }
    
})









//photography
app.get("/explore/photography/:photo", function(req, res){
    var photo=req.params.photo,
         file1="BEFORE IMAGE",
         file2="AFTER IMAGE",
         file3="FINAL IMAGE",
         img1 ="/images/photography/pht1.jpeg",
         img2 ="/images/photography/pht2.jpeg",
         img3 ="/images/photography/pht3.jpeg",
         img4 ="/images/photography/pht4.jpeg",
         img5 ="/images/photography/pht5.jpeg",
         img6 ="/images/photography/pht6.jpeg",
         img7 ="/images/photography/pht7.jpeg",
         img8 ="/images/photography/pht8.jpeg",
         url1 ="/explore/photography/img1",
         url2 ="/explore/photography/img2",
         url3 ="/explore/photography/img3",
         url4 ="/explore/photography/img4",
         url5 ="/explore/photography/img5",
         url6 ="/explore/photography/img6",
         url7 ="/explore/photography/img7",
         url8 ="/explore/photography/img8",
         y=1,
         a=1,
         b=1
        
       if (photo == "img1") {
           var doc1="https://drive.google.com/file/d/1ZDGsYzp0d95zkTWciHRxhwOhtU9Bct4y/view?usp=sharing",
               doc2="https://drive.google.com/file/d/1dHw3AE51T9M6ZNztFLsKQTxH9tNq5tQQ/view?usp=sharing",
               img ="/images/photography/pht1.jpeg",
               doc3="",
               name="Worskpace"
              
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       }
       else if (photo == "img2") {
          var doc1="https://drive.google.com/file/d/13Rz7JB4yABrOqRafqlyholDjgprjXPNk/view?usp=sharing",
              doc2="https://drive.google.com/file/d/1FNm8_j81dmp_XVCfeZ4uasIR5yZ1SJJz/view?usp=sharing",
              img ="/images/photography/pht2.jpeg",
              doc3="",
              name="Mountains"
              
              img2=img1
              url2=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
             
      }
      else if (photo == "img3") {
          var doc1="https://drive.google.com/file/d/1dYrbwBa0_Hr7aCsTipqs7lCUXgivfgQG/view?usp=sharing",
              doc2="https://drive.google.com/file/d/1Ne4euTlY6fFQC1PDp1cvCszk5PHvU_yK/view?usp=sharing",
              img ="/images/photography/pht3.jpeg",
              doc3="",
              name="Black&White-RETRO"
              
              img3=img1
              url3=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
      }
      else if (photo == "img4") {
          var doc1="https://drive.google.com/file/d/1S4AKl65bTBRWw-l4INiMB90Odm7hHv3T/view?usp=sharing",
              doc2="https://drive.google.com/file/d/16WSrZpiKlb7Y4_loPsljXrdiJRLjNpUu/view?usp=sharing",
              img ="/images/photography/pht4.jpeg",
              doc3="",
              name="Greenery"
              
              img4=img1
              url4=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
        
      }
      else if (photo == "img5") {
          var doc1="https://drive.google.com/file/d/101-pYy3W-HOLcCPT6fnSbvkGIhdSgjHR/view?usp=sharing",
              doc2="https://drive.google.com/file/d/13YpdouDL0sH99-iVDUrZYoF3ar1xuki_/view?usp=sharing",
              img ="/images/photography/pht5.jpeg",
              doc3="",
              name="Cloudy-Day"

              img5=img1
              url5=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
      }
      else if (photo == "img6") {
          var doc1="https://drive.google.com/file/d/1MXHC0V1vgfGcm78VVpsehK0VC2AD5DLe/view?usp=sharing",
              doc2="https://drive.google.com/file/d/1d71ENqZ3_crENNTy6joBsz7WudI3mH8f/view?usp=sharing",
              img ="/images/photography/pht6.jpeg",
              doc3="",
              name="The-LightHouse"

              img6=img1
              url6=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
      }
      else if (photo == "img7") {
          var doc1="https://drive.google.com/file/d/15QMYO7QRF9_D5ui-avQ-OzAPL1ySx6ID/view?usp=sharing",
              doc2="https://drive.google.com/file/d/1TLCbHmY09joI7vW4D_NYvrgblZClPPBu/view?usp=sharing",
              img ="/images/photography/pht7.jpeg",
              doc3="",
              name="Lake-Side-View"

              img7=img1
              url7=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
        
      }
      else if (photo == "img8") {
          var doc1="",
              doc2="",
              img ="/images/photography/pht8.jpeg",
              doc3=""
              img8=img1
              url8=url1
        res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
        
      }
      
  })


//webdevelopment

app.get("/explore/webd/:photo", function(req, res){
    var photo=req.params.photo,
         file1="STEPS USED FOR MAKING",
         file2="IMAGES USED",
         file3="CODE FILE",
         img1 ="/images/webDevelopment/SiteView0.png",
         img2 ="/images/webDevelopment/SiteView1.png",
         img3 ="/images/webDevelopment/SiteView2.png",
         img4 ="/images/webDevelopment/SiteView3.png",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/webd/img1",
         url2 ="/explore/webd/img2",
         url3 ="/explore/webd/img3",
         url4 ="/explore/webd/img4",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#",
         y=2,
         a=1,
         b=2
         
        
       if (photo == "img1") {
           var doc1="https://drive.google.com/file/d/1BPMMkrIPYmUXoVr65gGLusTM-zC-apgD/view",
               doc2="https://drive.google.com/drive/folders/1aZ9NwH_hlXdJdJ0x5npD7IJP2cgnZ5Ix",
               img ="/images/webDevelopment/SiteView0.png",
               doc3="https://drive.google.com/drive/folders/15b0ewJp2wl-yRF-PrkYO0qMWJnc6JlZA",
               name="Bike-Repair Website-DESIGN"

        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       }
       else if (photo == "img2") {
          var doc1="https://drive.google.com/file/d/1L7N8RqEx-ihoHPZwFSkI6qoyleNAaOrH/view",
              doc2="https://drive.google.com/drive/folders/17mz0IzBE25eFNllDN0mzlW52ugZTMkAt",
              img ="/images/webDevelopment/SiteView1.png",
              doc3="https://drive.google.com/drive/folders/17mz0IzBE25eFNllDN0mzlW52ugZTMkAt",
              name="Restaurant Website-DESIGN"

              img2=img1
              url2=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
             
      }
      else if (photo == "img3") {
          var doc1="https://drive.google.com/file/d/1zPagnBom1hUxPMWEpdX1D8S8uk4y-kOj/view?usp=sharing",
              doc2="https://drive.google.com/drive/folders/1ZngfRtZdjqt3sQh71ITdpGj1H7MohDiw?usp=sharing",
              img ="/images/webDevelopment/SiteView2.png",
              doc3="https://github.com/amanism19/blogg",
              name="SignIN-SignUP Page(BACKEND)"

              img3=img1
              url3=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
      }

      else if (photo == "img4") {
        var doc1="https://drive.google.com/file/d/1ex2CzPQKux_6a-LEWUUxzMGuVwuMf2dK/view?usp=sharing",
            doc2="https://drive.google.com/drive/folders/1A9cehcFKzujRfzFgxMAjzx81synMOZYT?usp=sharing",
            img ="/images/webDevelopment/SiteView3.png",
            doc3="https://github.com/amanism19/leavemanagementsystem",
            name="Management System WebPage"

            img4=img1
            url4=url1
      res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
     
    }
     
      
  })



  //robotics

  app.get("/explore/robo/:photo", function(req, res){
    var photo=req.params.photo,
         file1="STEPS IN MAKING",
         file2="CODE FILE",
         file3="",
         img1 ="/images/robo/buzz.jpg",
         img2 ="/images/robo/lift.jpg",
         img3 ="/images/robo/line.jpg",
         img4 ="#",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/robo/img1",
         url2 ="/explore/robo/img2",
         url3 ="/explore/robo/img3",
         url4 ="#",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#",
         y=1,
         a=2,
         b=2
         
        
       if (photo == "img1") {
           var doc1="https://drive.google.com/file/d/1WdlEyYEPd_-9bkZJph3h1tUkvm7A0J62/view?usp=sharing",
               doc2="https://drive.google.com/drive/folders/1WXW5dHQ6eDkhACYuzk9-GNz8amrewJZJ",
               img ="/images/robo/buzz.jpg",
               doc3="",
               name="Line-Following Bot"

        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       }
       else if (photo == "img2") {
          var doc1="https://drive.google.com/file/d/1WkZeIhqnKNwo4Em3Co336gSvnRxl-LYS/view",
              doc2="https://drive.google.com/drive/folders/1Wg5POJl4vDEt_1guGymsZPy1nonx4T24",
              img ="/images/robo/lift.jpg",
              doc3="",
              name="Buzz-Wire Game (with-DISPLAY)"

              img2=img1
              url2=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
             
      }
      else if (photo == "img3") {
          var doc1="https://drive.google.com/file/d/1WPSwvRJvxuimPNtBh0b1zeZmgJxZ7iGT/view",
              doc2="https://drive.google.com/drive/folders/1WCMGST4rAT_dND-pFA4iYIQ4h6IoTEDg",
              img ="/images/robo/line.jpg",
              doc3="",
              name="Weight-Lifting Bot"

              img3=img1
              url3=url1
        res.render("post.ejs", {name:name, doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8,y:y,a:a,b:b})
       
      }

      
     
      
  })

//Competitive coding

app.get("/explore/cc/:photo", function(req, res){
    var photo=req.params.photo,
         file1="STEPS IN MAKING",
         file2="CODE FILE",
         file3="",
         img1 ="/images/competitiveCoding/cc1.jpg",
         img2 ="/images/competitiveCoding/cc2.jpg",
         img3 ="/images/competitiveCoding/cc3.jpg",
         img4 ="#",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/guide/cc",
         url2 ="/explore/guide/cc",
         url3 ="/explore/guide/cc",
         url4 ="#",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#"
         
        
       if (photo == "img1") {
           var doc1="",
               doc2="",
               img ="/images/competitiveCoding/cc1.jpg",
               doc3=""
        res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
       }
       else if (photo == "img2") {
          var doc1="",
              doc2="",
              img ="/images/competitiveCoding/cc2.jpg",
              doc3=""
              img2=img1
              url2=url1
        res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
             
      }
      else if (photo == "img3") {
          var doc1="",
              doc2="",
              img ="/images/competitiveCoding/cc3.jpg",
              doc3=""
              img3=img1
              url3=url1
        res.render("post.ejs", {doc1:doc1, doc2:doc2,doc3:doc3,img:img,file1:file1,file2:file2,file3:file3,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
       
      }

      
     
      
  })



  app.get("/explore/guide/:skill", function(req, res){
      var skill=req.params.skill

      if(skill=="webd"){
          var doc1="https://drive.google.com/file/d/1c0wQg7plmpQAJ7CGVCHrvywMmmyHlMsF/view?usp=sharing",
              doc2="https://drive.google.com/file/d/1w_XPlrQgMaXcDTX5SdyswA_DwDB9R8qV/view?usp=sharing",
              doc3="",
              doc4="",
              a=1,
              b=1,
              c=2,
              d=2,
              m=1,
              n=2,
              o=1,
              img1 ="/images/webDevelopment/SiteView0.png",
         img2 ="/images/webDevelopment/SiteView1.png",
         img3 ="/images/webDevelopment/SiteView2.png",
         img4 ="/images/webDevelopment/SiteView3.png",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/webd/img1",
         url2 ="/explore/webd/img2",
         url3 ="/explore/webd/img3",
         url4 ="/explore/webd/img4",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#"
              
         res.render("course.ejs", {name:"WEB DEVELOPMENT",name1:"Guide1 pdf", name2:"Guide2 rtf",name3:"",name4:"",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
      }

      else if(skill=="robo"){
        var doc1="https://drive.google.com/drive/folders/1Wpg_cr8ZnhQl740nfKMPd4RJZeu1uLbc",
        doc2="",
        doc3="",
        doc4="",
         a=1,
         b=2,
         c=2,
         d=2,
         m=2,
         n=2,
         o=1,
         img1 ="/images/robo/buzz.jpg",
         img2 ="/images/robo/lift.jpg",
         img3 ="/images/robo/line.jpg",
         img4 ="#",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/robo/img1",
         url2 ="/explore/robo/img2",
         url3 ="/explore/robo/img3",
         url4 ="#",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#"
        res.render("course.ejs", {name:"ROBOTICS",name1:"Guide1 img", name2:"Guide2 rtf",name3:"",name4:"",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
     }

     else if(skill=="cc"){
        var doc1="https://drive.google.com/file/d/1KDsZz7RrWIxosvvixCQ9mj7ZbqGA9ZRD/view?usp=sharing",
        doc2="https://drive.google.com/file/d/1wq8g-D0zKNCxoKQyZPG_JqRq_Z2g-CWC/view?usp=sharing",
        doc3="https://drive.google.com/file/d/1ClgidcCiNUU3kg4x0NEAtm47nFhlpaey/view?usp=sharing",
        doc4="https://drive.google.com/file/d/1rvV7MXX0kjk48Bs0vTTa24MHJIBCpTjS/view?usp=sharing",
        a=1,
        b=1,
        c=1,
        d=1,
        m=2,
        n=2,
        o=2,
        img1 ="/images/competitiveCoding/cc1.jpg",
         img2 ="/images/competitiveCoding/cc2.jpg",
         img3 ="/images/competitiveCoding/cc3.jpg",
         img4 ="#",
         img5 ="#",
         img6 ="#",
         img7 ="#",
         img8 ="#",
         url1 ="/explore/guide/cc",
         url2 ="/explore/guide/cc",
         url3 ="/explore/guide/cc",
         url4 ="#",
         url5 ="#",
         url6 ="#",
         url7 ="#",
         url8 ="#"
        res.render("course.ejs", {name:"PROGRAMING LANGUAGES",name1:"Guide1 (C++ Basic)", name2:"Guide2 (c++ Intermediate)",name3:"Guide3 (Python)",name4:"Guide4 (Java)",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
     }

     else if(skill=="photoshop"){
        var doc1="https://drive.google.com/file/d/1yd8_0NFLuxt9MMitaaA8TYEXzO8fBWBx/view?usp=sharing",
        doc2="https://drive.google.com/file/d/1ATA3jQQ3DpHpFGiunQNwNbjvoSll668R/view?usp=sharing",
        doc3="https://drive.google.com/file/d/19xdrcIBatIJiq62Q6f9Xy2318fjypCQM/view?usp=sharing",
        doc4="",
        a=1,
        b=1,
        c=1,
        d=2,
        m=1,
        n=1,
        o=1,
        img1 ="/images/photoshop/ps1.jpg",
       img2 ="/images/photoshop/ps2.jpg",
       img3 ="/images/photoshop/ps3.jpg",
       img4 ="/images/photoshop/ps4.jpg",
       img5 ="/images/photoshop/ps5.jpg",
       img6 ="/images/photoshop/ps6.jpg",
       img7 ="/images/photoshop/ps7.jpg",
       img8 ="/images/photoshop/ps8.jpg",
       url1 ="/explore/photoshop/img1",
       url2 ="/explore/photoshop/img2",
       url3 ="/explore/photoshop/img3",
       url4 ="/explore/photoshop/img4",
       url5 ="/explore/photoshop/img5",
       url6 ="/explore/photoshop/img6",
       url7 ="/explore/photoshop/img7",
       url8 ="/explore/photoshop/img8"
        res.render("course.ejs", {name:"PHOTOSHOP",name1:"Guide1 (Basic)", name2:"Guide2 (Intermediate)",name3:"Guide3 (Advanced)",name4:"",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
     }
     
     else if(skill=="illustrator"){
        var doc1="https://drive.google.com/file/d/11qah1q5s6v9rrC2yHQPd2mjlEV0BDpX5/view?usp=sharing",
        doc2="https://drive.google.com/file/d/1jy_nh1hMdiymA3tpgQRm-ud0a6_tB_fG/view?usp=sharing",
        doc3="https://drive.google.com/file/d/1-0bCWzC5tTE7dVU2wZ3WQ31ajxz8EkiM/view?usp=sharing",
        doc4="",
        a=1,
        b=1,
        c=1,
        d=2,
        m=1,
        n=1,
        o=1,
        img1 ="/images/illustrator/ai1.png",
        img2 ="/images/illustrator/ai2.png",
        img3 ="/images/illustrator/ai3.jpg",
        img4 ="/images/illustrator/ai4.png",
        img5 ="/images/illustrator/ai5.png",
        img6 ="/images/illustrator/ai6.png",
        img7 ="/images/illustrator/ai7.jpg",
        img8 ="/images/illustrator/ai8.png",
        url1 ="/explore/illustrator/img1",
        url2 ="/explore/illustrator/img2",
        url3 ="/explore/illustrator/img3",
        url4 ="/explore/illustrator/img4",
        url5 ="/explore/illustrator/img5",
        url6 ="/explore/illustrator/img6",
        url7 ="/explore/illustrator/img7",
        url8 ="/explore/illustrator/img8"
        res.render("course.ejs", {name:"ILLUSTRATOR",name1:"Guide1 (Basic)", name2:"Guide2 (Intermediate + Adv",name3:"Guide (Illustrator-3D)",name4:"",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
     }
    
     else if(skill=="photography"){
        var doc1="https://drive.google.com/file/d/1L9AzrfNrcNeyj_Teq8t6v_qpQ1sr8OCn/view?usp=sharing",
        doc2="",
        doc3="",
        doc4="",
        a=1,
        b=2,
        c=2,
        d=2,
        m=1,
        n=1,
        o=1,
        img1 ="/images/photography/pht1.jpeg",
         img2 ="/images/photography/pht2.jpeg",
         img3 ="/images/photography/pht3.jpeg",
         img4 ="/images/photography/pht4.jpeg",
         img5 ="/images/photography/pht5.jpeg",
         img6 ="/images/photography/pht6.jpeg",
         img7 ="/images/photography/pht7.jpeg",
         img8 ="/images/photography/pht8.jpeg",
         url1 ="/explore/photography/img1",
         url2 ="/explore/photography/img2",
         url3 ="/explore/photography/img3",
         url4 ="/explore/photography/img4",
         url5 ="/explore/photography/img5",
         url6 ="/explore/photography/img6",
         url7 ="/explore/photography/img7",
         url8 ="/explore/photography/img8"
        res.render("course.ejs", {name:"PHOTOGRAPHY",name1:"Guide1 ", name2:"Guide2 rtf",name3:"",name4:"",doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,doc1:doc1,doc2:doc2,doc3:doc3,doc4:doc4,a:a,b:b,c:c,d:d,m:m,n:n,o:o,img1:img1,img2:img2,img3:img3,img4:img4,img5:img5,img6:img6,img7:img7,img8:img8,url1:url1,url2:url2,url3:url3,url4:url4,url5:url5,url6:url6,url7:url7,url8:url8})
     }
          
  })


  app.post("/register" ,function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
           return res.render("register.ejs")
        }       
            passport.authenticate("local")(req,res,function(){
                res.redirect("/explore")
            })
        
    })
    
})


app.post("/login",passport.authenticate("local", {
  successRedirect: "/explore",
  failureRedirect: "/login"
}), function(req,res){

})
   

app.get("/logout", function(req,res){
  req.logout()
  res.redirect('/')
})


app.get("/login", function(req,res){
  res.render("login.ejs")
})



app.get("/register", function(req, res){
  res.render("register.ejs")
})

const PORT = process.envPORT || 5000;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});