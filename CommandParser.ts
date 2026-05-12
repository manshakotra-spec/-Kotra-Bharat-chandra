export function parseCommand(input: string) {
  if (input.includes('/workflow')) {
    return 'workflow';
  }

  if (input.includes('/image')) {
    return 'image';
  }

  return 'chat';
}
