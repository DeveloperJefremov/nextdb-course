import LayoutProvider from '@/providers/layout-provider';
import ThemeProvider from '@/providers/theme-provider';
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log(
		'Clerk Publishable Key: ',
		process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
	);

	return (
		<ClerkProvider>
			<html lang='en'>
				<body>
					<ThemeProvider>
						<LayoutProvider>{children}</LayoutProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
