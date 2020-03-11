export const randomString = (length: number = 7): string => {
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	const chars = []

	for (let i = 0; i < length; i++) {
		chars.push(possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)))
	}

	return chars.join('')
}
