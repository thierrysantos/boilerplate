export const importFiles = (context) =>
	context.keys().reduce((acc, path) => {
		const [, folder] = path.match(/\.\/(.*)\//i);
		return {
			...acc,
			[folder]: context(path).default,
		};
	}, {});
