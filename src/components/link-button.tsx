'use client';
import { useRouter } from 'next/navigation';

import { Button } from 'antd';

const LinkButton = ({ title, path }: { title: string; path: string }) => {
	const router = useRouter();
	return (
		<Button type='default' onClick={() => router.push(path)}>
			{title}
		</Button>
	);
};

export default LinkButton;
