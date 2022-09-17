const now =  new Date ()
const agora = now.getHours()

if (agora < 12){
    console.log('BOM DIA!')
}else if (agora >= 13){
    console.log('BOA TARDE!')
}else (agora >= 18) 
{
    console.log('BOA NOITE!')
}