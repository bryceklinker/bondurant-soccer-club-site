import React from 'react';

export const ShellMainContent = ({children}) => {
	return (
		<main className={'mt-10'}>
			<React.Suspense fallback={<em>Loading...</em>}>
				{children}
			</React.Suspense>
		</main>
	)
}
