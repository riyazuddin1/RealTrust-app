export const API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'http://localhost:5000';

export function resolveUploadUrl(maybePath) {
  if (!maybePath) return '';
  if (maybePath.startsWith('http://') || maybePath.startsWith('https://')) return maybePath;
  if (maybePath.startsWith('/uploads/')) return `${API_ORIGIN}${maybePath}`;
  return maybePath;
}

