const text=null
const index=0
const mainText=''
export default{
    autoWriter(message){
       setInterval(() => {
        mainText=text.slice(0,index)
        index++
        if(index>text.length-1){
            index=0
        }
        return{mainText}
       }, 100);
    }
}