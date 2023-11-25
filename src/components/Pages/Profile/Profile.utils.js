export function getMyAge() {
  const initialYear = new Date('1987-04-18').getFullYear();
  const currentYear = new Date().getFullYear();

  return Math.abs(currentYear - initialYear);
}
export function getExperienceYears() {
  const initialYear = new Date('2020-10-01').getFullYear();
  const currentYear = new Date().getFullYear();

  return Math.abs(currentYear - initialYear);
}
