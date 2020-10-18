const Discord = require("discord.js");
const client = new Discord.Client();

const express = require("express");
const app = express();
const db = require("wio.db");

var path = require("path");
var bdy = require("body-parser");

app.use(bdy.urlencoded({extended : true}))
app.set('views',path.join(__dirname,"/views"))
app.set('view engine','ejs')
app.use(express.static("public"));
app.listen(3000);

app.get("/", (req, res) => {
    Kisiler();
  res.render('index',{users:db.fetch("users")})
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

async function Kisiler(p) {
    var server = "675150325619097653";
    var users = `<div class="row mb-5">
    <div class="col-12">
      <div class="block-heading-1">
        <h2>Sunucu Kemik Ekip</h2><br>
      </div>
    </div>
  </div>
  <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up">
            <div class="block-team-member-1 text-center rounded">
              <figure>
                <img src="${client.guilds.cache.get(server).owner.user.avatarURL()}" alt="Image" class="img-fluid rounded-circle">
              </figure>
              <h3 class="font-size-20 text-black">${client.guilds.cache.get(server).owner.user.tag}</h3>
              <span class="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Owner</span>
              <p class="px-3 mb-3"></p>
              <div class="block-social-1">
                <a target="_blank" href="https://www.instagram.com/burkk.gulsti/" class="btn border-w-2 rounded primary-primary-outline--hover"><span class="icon-instagram"></span></a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div class="block-team-member-1 text-center rounded">
              <figure>
                <img src="${client.guilds.cache.get(server).members.cache.get("584742889939140629").user.avatarURL()}" width="130" height="130" alt="Image" class="img-fluid rounded-circle">
              </figure>
              <h3 class="font-size-20 text-black">${client.guilds.cache.get(server).members.cache.get("584742889939140629").user.tag}</h3>
              <span class="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Developer ,Admin</span>
              <p class="px-3 mb-3"></p>
              <div class="block-social-1">
                <a target="_blank" href="https://www.facebook.com/yusufyesilcicek61" class="btn border-w-2 rounded primary-primary-outline--hover"><span class="icon-facebook"></span></a>
                <a target="_blank" href="https://www.instagram.com/yusuf_yesilcicek/" class="btn border-w-2 rounded primary-primary-outline--hover"><span class="icon-instagram"></span></a>
              </div>
            </div>
          </div>
          </div>`;
        
    //client.guilds.cache.get(server).owner.user.avatarURL();
    users += ``;
    var hyper = "";
    var imperia = "";
    var ultra = "";
    var saint = "";
    var astarte = "";
    var florenz = "";
    var crew = "";
    var assistan = "";

    
    try {
        client.guilds.cache.get(server).members.cache.forEach(m => {
            if(m.user.id != client.guilds.cache.get(server).owner.id){
                m.roles.cache.forEach(r => {
                    if(r.id == "675152270660337674"){hyper += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "711333754324516864"){imperia += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "675210123802705930"){ultra += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "711362633588015184"){saint += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "711339378877923348"){astarte += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "675153695217942559"){florenz += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "699252262161350666"){crew += `${m.user.tag}#${m.user.avatarURL()};`}
                    else if (r.id == "711335958854893659"){assistan += `${m.user.tag}#${m.user.avatarURL()};`}
                });  
            }
        });

        users += `<div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>HyperCool of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;
      var i = 0;
        hyper.substring(0,hyper.length - 1).split(';').forEach(m1 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m1.split('#')[0] + "#" + m1.split('#')[1],m1.split('#')[2])
            i = i + 1;
        });
        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Imperia of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

        i = 0;
        imperia.substring(0,imperia.length - 1).split(';').forEach(m2 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m2.split('#')[0] + "#" + m2.split('#')[1],m2.split('#')[2])
            i = i + 1;
        });
        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>UltraCoolest of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        ultra.substring(0,ultra.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });

        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Saint of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        saint.substring(0,saint.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });


        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Astarte of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        astarte.substring(0,astarte.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });

        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Florenz of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        florenz.substring(0,florenz.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });

        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Crew of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        crew.substring(0,crew.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });

        users += `</div>
        <div class="row mb-5">
        <div class="col-12">
          <div class="block-heading-1">
            <h2>Assistant of Coolizm</h2><br>
          </div>
        </div>
      </div>
      <div class="row">`;

      i = 0;
        assistan.substring(0,assistan.length - 1).split(';').forEach(m3 => {
            if(i == 4){
                users += `</div>
                <div class="row">`;
            }
            else if (i == 7){
                users += `</div>
                <div class="row">`;
            }
            users += ekle(m3.split('#')[0] + "#" + m3.split('#')[1],m3.split('#')[2])
            i = i + 1;
        });
        await db.set("users",users);

     } catch (e) {
     }
}

function ekle(isim,url) {
    return `<div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
      <div class="block-team-member-1 text-center rounded">
        <figure>
          <img src="${url}" width="130" height="130" alt="Image" class="img-fluid rounded-circle">
        </figure>
        <h3 class="font-size-20 text-black">${isim}</h3>
      </div>
    </div>`
}

client.on('ready', ()=>{
    Kisiler();
    setInterval(
        function()
        {
           Kisiler()
        },1800000);
  });

  client.login("TOKEN");

  app.use((req, res) => {
    res.status(404).render('404')
  });
