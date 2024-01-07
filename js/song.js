const songs=[
    {
        song: "I dont' want a lot for Christmas.There is just one thing I need",
        title: "All I Want For Christmas Is You",
        singer: "Mariah Carey",
    },
    {
        song: "하얀 눈이 내려올 때면.온 세상이 물들을 때면.눈꽃이 피어나 또 빛이나 눈이 부신 너처럼",
        title: "미리 메리 크리스마스",
        singer: "아이유(Feat. 천둥 of MBLAQ)",
    },
    {
        song: "너를 만나면 눈물 차 올라.바보 같은 난 아무 말 못해.말해줘 메리 메리 크리스마스.안녕 잘 지내는거지",
        title: "첫 눈",
        singer: "EXO(엑소)",
    },
    {
        song: "Santa, tell me if you're really there.Don't make me fall in love again.if he won't be here next year",
        title: "Santa Tell me",
        singer: "Ariana Grande",
    },
    {
        song: "I want you to know that I'm never leaving.Cause I'm Mrs.Snow, till death we'll be freezing.Yeah, you are my home.my home for all seasons, So come on let's go",
        title: "Snowman",
        singer: "Sia",
    },
    {
        song: "I don't wanna miss out on the holiday.But I can't stop staring at your face",
        title: "Mistletoe",
        singer: "Justin Bieber",
    },
    {
        song: "Wherever you go.You light up the room.I hope that you'll make it back home soon.Cause it won't feel like Christmas without you",
        title: "Christmas Without You",
        singer: "Ava Max",
    },
    {
        song: "I dont' want a lot for Christmas. There is just one thing I need",
        title: "All I Want For Christmas Is You",
        singer: "Mariah Carey",
    },
    {
        song: "Wrapped in his arms by the fireplace.Will be the perfect gift, Let it snow.let it snow, let it snow.Let it snow In California",
        title: "Snow In California",
        singer: "Ariana Grande",
    },
    {
        song: "Jingle bell, jingle bell, jingle bell rock.Jingle bells swing and jingle bells ring.Snowin' and blowin' up bushels of fun.Now the jingle hop has begun",
        title: "Jingle Bell Rock",
        singer: "aespa(에스파)",
    },
];

const song=document.querySelector("#song span:first-child");
const title=document.querySelector("#song span:nth-child(2)");
const singer=document.querySelector("#song span:last-child");
const br=document.createElement("br");
const recomSong=songs[Math.floor(Math.random()*songs.length)];

song.innerText=recomSong.song;
title.innerText=recomSong.title;
singer.innerText=`-${recomSong.singer}-`;

song.appendChild(br);