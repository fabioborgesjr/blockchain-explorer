export const createSchema = (
  id: string,
  label: string,
  formatter?: (...params: never[]) => string | undefined,
) => {
  return {
    id,
    label,
    formatter,
  }
}
