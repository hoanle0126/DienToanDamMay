export const formatTime = (isoString) => {
    const date = new Date(isoString);

    let hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Xác định AM hoặc PM
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  
    // Định dạng lại phút
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  
    // Trả về định dạng mong muốn
    return `${hours}:${minutesFormatted} ${ampm}`;
};
