export const fileSize = (size) => {
  let temp = 0;
  let unit = "byte";
  if(size / 1024 > 1){
    temp = size / 1024;
    unit = "KB";
    if(temp / 1024 > 1){
      temp = temp / 1024;
      unit = "MB";
      if(temp / 1024 > 1){
        temp = temp / 1024;
        unit = "GB";
      }
    }
  }
  return Math.ceil(temp,2).toString() + unit;
}