export const checkFileValidation = (file?: File) => {
  // 타입이 없을수도 있어 ?. 라고 표현했습니다.
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB!!");
    return false;
    // 너무 크면 돌려보냅니다. --- return
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    // if (file.type.includes("jpeg") || file.type.includes("png"))
    // 요런 것들이 있다면?
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }
  return true;
};
