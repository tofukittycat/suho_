/**
 * 모바일 vh 이슈 대응
 */
export default function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
