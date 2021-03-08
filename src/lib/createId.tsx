let id = parseInt(localStorage.getItem('idMax') || '0')

export function createId(): string {
  id += 1
  const idString = JSON.stringify(id)
  localStorage.setItem('idMax', idString)
  return idString
}
