/**
 * url에서 file name 얻기
 * @param url https://image-staging.datapuree.io/notice/80/result_data_1.json
 * @returns result_data_1.json
 */
export function fileNameByURL(url: string): string {
  return url.split("/").reverse()[0];
}
