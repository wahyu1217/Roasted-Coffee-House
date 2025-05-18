/**
 * Membuat link mailto dengan email, subjek, dan isi body.
 *
 * @param email - Alamat email tujuan
 * @param subject - Subjek email (opsional)
 * @param body - Isi body email (opsional)
 * @returns mailto URL string
 */
export function createMailtoLink(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  return `mailto:${email}?${params.toString()}`
}
