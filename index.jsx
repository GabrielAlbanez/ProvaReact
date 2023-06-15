




const pegarVideo = async()=>{
const resposta = axios.get("http://localhost:8889/videos")
}

const deletarVideo = async(videosId)=>{
const respostaCOnfimar  = window.alert("vc realemente deseja deletar esse video")
try{
 await axios.delete(`http://localhost:8889/videos/${videosId}`)
}
catch(error){
console.log(error)
}
}

const VideoCriado = async(videoCriado)=>{
    try{
          await axios.post(`http://localhost:8889/videos/${videoCriado}`,videoCriado)
    }
    catch(error){
     console.log(error)
    }
}

const autualizarVideo = async(videoAtt)=>{
    try{
        await axios.post(`http://localhost:8889/videos/${videoAtt}`,videoAtt)
  }
  catch(error){
   console.log(error)
  }
}