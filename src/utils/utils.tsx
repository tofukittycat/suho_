/**
 * url에서 file name 얻기
 * @param url https://image-staging.datapuree.io/notice/80/result_data_1.json
 * @returns result_data_1.json
 */
export function fileNameByURL(url: string): string {
  return url.split("/").reverse()[0];
}

/**
 * 입력된 값의 길이에 따라 휴대전화 번호 형식에 맞는 string 반환
 * @param phoneNumber
 * @returns true / false
 */
export function validatePhoneNumber(phoneNumber: string | undefined | null): boolean {
  if (!phoneNumber || phoneNumber.length === 0) {
    return true;
  }

  const regPhoneNumber = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  return regPhoneNumber.test(phoneNumber);
}

/**
 * 입력된 값의 길이에 따라 휴대전화 번호 형식에 맞는 string 반환
 * @param phoneNumber
 * @returns 000, 000-0, 000-00, 000-0000-0000
 */
export function formatPhoneNumberInProgress(phoneNumber: string | null | undefined): string {
  if (!phoneNumber) {
    return "";
  }

  const normalizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");

  if (normalizedPhoneNumber.length <= 3) {
    return normalizedPhoneNumber;
  }

  const formattedPhoneNumberParts = [];

  if (normalizedPhoneNumber.length < 8) {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.substring(3));
  } else {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(3, 7));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(7, 11));
  }

  return formattedPhoneNumberParts.join("-");
}

/**
 * 주어진 문자열에서 '-' 제거
 * @param str 000-0000-0000
 * @returns 00000000000
 */
export function removeHyphens(str: string | undefined) {
  return (str ?? "").replaceAll("-", "");
}
