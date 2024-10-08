'use client';
import { ConfigProvider } from 'antd';

const TeamProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<ConfigProvider
				theme={{
					token: { colorPrimary: '#1B4242', borderRadius: 2 },
					components: {
						Button: {
							controlHeight: 40,
							boxShadow: 'none',
							colorPrimaryActive: '#1B4242',
							controlOutline: 'none',
							colorBorder: '#1B4242',
						},
						Input: {
							controlHeight: 45,

							boxShadow: 'none',
							activeShadow: 'none',
						},
						Select: {
							controlHeight: 45,
							boxShadow: 'none',
							controlOutline: 'none',
						},
						InputNumber: {
							controlHeight: 45,

							boxShadow: 'none',
							activeShadow: 'none',
						},
					},
				}}
			>
				{children}
			</ConfigProvider>
		</div>
	);
};

export default TeamProvider;
