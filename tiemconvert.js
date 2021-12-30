function timeConversion(s) {
   let short = s.substring(0, s.length - 2)
   let segments = short.split(':')

   if(s.includes('P')){
      //its PM and we need to convert
      if (segments[0]==='12'){
         console.log(short);
      } else{
         let milSegment = 12 + parseInt(segments[0])
         let answer = `${milSegment}:${segments[1]}:${segments[2]}`
         console.log(answer);
      }
   }
   if(s.includes('A')) {
      //its AM
      if (segments[0]==='12'){
         let answer = `00:${segments[1]}:${segments[2]}`
         console.log(answer)
      }else{
         console.log(short)
      }
   }
}

timeConversion('12:45:54PM')
