import axios from "axios";
import { URLSearchParams } from "url";

// import VideoInfo from './models/VideoInfo';

function Home() {
  return (
    <div>
      <label>ID do Vídeo</label>
      <input type="text" id="videoId"></input>
      <button onClick={() => getVideoInfo()}>Informações do vídeo</button>
      <br></br>
      <span id="json"></span>
      <a
       title="formato de vídeo: 720"
       download="PARTE 2 - TERÇA FEIRA - 20h - CRIANDO O AMBIENTE NA NUVEM.mp4"
       data-quality="720"
       data-type="mp4"
        href="https://r7---sn-8p8v-bg0l.googlevideo.com/videoplayback?expire=1612390933&ei=tc0aYLLPIYy0wATdwq3gCA&ip=2804%3A431%3Ac7eb%3A4e64%3A9abd%3Af223%3A4295%3A577d&id=o-AMgtCUUHCOdsCrhOS0cYNkEj7-LHQ28tIygXAqfbN5XT&itag=18&source=youtube&requiressl=yes&mh=_3&mm=31%2C29&mn=sn-8p8v-bg0l%2Csn-bg0ezn7y&ms=au%2Crdu&mv=m&mvi=7&pcm2cms=yes&pl=47&initcwndbps=487500&vprv=1&mime=video%2Fmp4&ns=78ocSwZS8LB6mZedwr_cxGUF&gir=yes&clen=321643417&ratebypass=yes&dur=9390.056&lmt=1612344648579492&mt=1612368778&fvip=1&beids=23886210&c=WEB&txp=5310224&n=eJul8k2Km1otVAZPZZHJm4&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOHQSqo28eurAWTA0tNW3shNQ05bVJQ4FtR2Mxl97UygAiEA8G7Nrkws0BiXDQ9-0WKye2Vp6jGqNO8YR6m3QahUyDk%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMb8kXeWX7XK9-gRprkgH619TtUT5UIRyInOslOgXJ6UAiEA00Td7iKO93ALmEcdV3Gtg4E_y_2UYYN4V9SXsoYBsAA%3D&amp;title=PARTE%202%20-%20TER%C3%87A%20FEIRA%20-%2020h%20-%20CRIANDO%20O%20AMBIENTE%20NA%20NUVEM"
                data-ga-event="send;event;result;click;101"
      >
        Download Receipt
      </a>
      <a
        title="formato de vídeo: 720"
        download="PARTE 2 - TERÇA FEIRA - 20h - CRIANDO O AMBIENTE NA NUVEM.mp4"
        data-quality="720"
        data-type="mp4"
        href="https://r7---sn-n02xgoxufvg3-2gbl.googlevideo.com/videoplayback?expire=1612384603&amp;ei=-7QaYLOoIJrj1wKlmqXAAw&amp;ip=212.102.39.131&amp;id=o-AIZ8lpUQaGrsbon6yfRYxVjgfobaMGYONi5d5cOZxFP8&amp;itag=22&amp;source=youtube&amp;requiressl=yes&amp;mh=_3&amp;mm=31%2C29&amp;mn=sn-n02xgoxufvg3-2gbl%2Csn-2gb7sn7s&amp;ms=au%2Crdu&amp;mv=m&amp;mvi=7&amp;pl=26&amp;initcwndbps=528750&amp;vprv=1&amp;mime=video%2Fmp4&amp;ns=9J_65NE8WtzAEMzCNW_J4xIF&amp;ratebypass=yes&amp;dur=9390.080&amp;lmt=1612346561851943&amp;mt=1612362785&amp;fvip=1&amp;c=WEB&amp;txp=5311224&amp;n=BU2FVuWHkHZVgLobQ&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRAIgItmHHmACCCRKuWFmiN3RK5MkuUP6kYdHqhxZ8iMwj7gCICeGjDAkwnm1LErqaR1yvgcYpbKWWDO_8eRx9J_6QIgB&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRgIhANWObdSpM48FS5HFId741JGs4bre_sshCmW4q9N5MzmzAiEA3g2lsXTub9Pi04MG3Po9xkYJ3EbT4tRb9M6ZXHAAXDE%3D&amp;title=PARTE%202%20-%20TER%C3%87A%20FEIRA%20-%2020h%20-%20CRIANDO%20O%20AMBIENTE%20NA%20NUVEM"
        data-ga-event="send;event;result;click;101"
      >
        MP4 <span class="subname">720</span>
      </a>
    </div>
  );
}

async function getVideoInfo() {
  const videoIdRegex = /^[\w_-]+$/;
  const videoId = "jks4D01cF_k";
  const eurl = `https://youtube.googleapis.com/v/${videoId}`;
  if (!videoIdRegex.test(videoId)) {
    throw new Error("Invalid videoId.");
  }

  const response = await axios.get(
    `https://www.youtube.com/get_video_info?video_id=${videoId}&el=embedded&eurl=${eurl}&sts=18333`,
    {
      headers: { Accept: "application/json" },
    }
  );
  console.log("aqui ", eurl);
  response.headers["content-type"];

  const { data } = response;
  //   console.log("1....: ", qsToJson(data));

  // const parsedResponse = response.data;
  // const jsonResponse = JSON.parse(parsedResponse.player_response);

  document.getElementById("json").innerHTML = qsToJson(data);
  //   console.log('2....: ', JSON.stringify(data));
  //   console.log("2....: ", qsToJson(data));
  const stream = qsToJson(data);
  const player_response = JSON.parse(stream.player_response);

  console.log("-------- ", player_response.streamingData.formats[0]);
  downloadURI(player_response.streamingData.formats[0].url, "bla");
  // window.location.href = player_response.streamingData.formats[0].url;
  // const { playabilityStatus, videoDetails, streamingData } = jsonResponse;
  // const videoInfo = { playabilityStatus, videoDetails, streamingData };

  // return videoInfo;
  return "";
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;

  // link.setAttribute('href', 'video/mp4' + encodeURIComponent(uri));
  // 'video/mp4;+codecs="avc1.42001E,+mp4a.40.2"'
  // link.setAttribute('target', '_parent');
  link.setAttribute("data-type", "mp4");
  document.body.appendChild(link);
  link.click();
  // document.body.removeChild(link);
  // delete link;
}

function qsToJson(qs) {
  var res = {};
  var pars = qs.split("&");
  var kv, k, v;
  var obj = {};

  //   pars.map((e) => {
  //     kv = e.split("=");
  //     k = kv[0];
  //     v = kv[1];
  //     console.log('res...:', res);
  //     res[k] = decodeURIComponent(v);

  //     console.log("res[k] ", res);
  //   });
  pars.map((e) => {
    kv = e.split("=");
    k = kv[0];
    v = kv[1];
    if (k === "player_response") {
      res[k] = decodeURIComponent(v);
      // console.log('-------- ', JSON.parse(res[k]).streamingData)
    }
  });
  //   console.log("-------- ", JSON.parse(res.player_response));
  return res;
}

export default Home;
